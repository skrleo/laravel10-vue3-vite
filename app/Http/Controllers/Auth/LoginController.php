<?php
/*
 * @author: Rio
 * @Date: 2024-02-03 00:42:01
 */

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;


class LoginController extends Controller
{

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * 登录
     *
     * @author ChenGuangHui
     * @param Request $request
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account' => 'required',
            'password' => 'required|min:6',
        ], Lang::get("validation"));

        if ($validator->fails()) {
            return error($validator->errors()->first());
        }
        $account = $request->input('account');

        $userInfo = User::query()->where(function (Builder $query) use ($account) {
                $query->where('email', $account);
            })->orWhere(function (Builder $query) use ($account) {
                $query->where('mobile', $account);
            })->first();

        if (!$userInfo) {
            return error("账号不存在！");
        }

        filter_var($account, FILTER_VALIDATE_EMAIL) ?
            $credentials['email'] = $account :
            $credentials['mobile'] = $account;

        //接收传来的值
        $credentials['password'] = $request->input('password');

        $token = auth('admin')->attempt($credentials);
        if (!$token) {
            return error("账号或密码错误");
        }
        auth('admin')->setToken($token);
        $expiration = auth('admin')->getPayload()->get('exp');

        return data([
            'user' => $userInfo,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $expiration - time(),
        ]);
    }

    /**
     * Log the user out of the application.
     */
    public function logout(Request $request)
    {
        auth('admin')->logout();

        return success();
    }
}
