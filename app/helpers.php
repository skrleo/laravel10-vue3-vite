<?php
/*
 * @author: Rio
 * @Date: 2024-02-02 23:47:30
 */

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Response;

if (!function_exists('success')) {
    /**
     * 返回成功的json数组
     *
     * @author ChenGuangHui
     * @dateTime 2022-01-20
     * @param  string $msg
     * @param  int    $code
     *
     * @return void
     */
    function success($msg = '请求成功', $code = 200)
    {
        $result = [
            'code' => $code,
            'msg' => $msg,
            'data' => array()
        ];
        return Response::json($result);
    }
}

if (!function_exists('error')) {
    /**
     * 返回失败的json数组
     *
     * @author ChenGuangHui
     * @dateTime 2022-01-20
     * @param  string $msg
     * @param  int    $code
     *
     * @return void
     */
    function error($msg = '请求失败', $code = 500)
    {
        $result = [
            'code' => $code,
            'msg' => $msg,
            'data' => array()
        ];
        return Response::json($result);
    }
}

if (!function_exists('data')) {
    /**
     * 返回成功的数据集合
     *
     * @author ChenGuangHui
     * @dateTime 2022-01-20
     * @param  array  $data
     * @param  int    $code
     * @param  string $msg
     *
     * @return void
     */
    function data($data = [], $msg = '请求成功', $code = 200, $cookie = '')
    {
        $result = [
            'code' => $code,
            'msg' => $msg,
            'data' => $data
        ];
        if ($cookie) {
            return Response::json($result)->cookie($cookie);
        } else {
            return Response::json($result);
        }
    }
}
