<!--
 * @author: Rio
 * @Date: 2024-01-28 20:05:58
-->
<template>
	<div
		class="h-[100vh] flex items-center bg-no-repeat bg-center bg-cover bg-[url(@/assets/image/login-background.png)]"
	>
		<div class="w-[80%] m-a flex justify-end">
			<div class="b b-gray-1 b-solid pl-18 pr-18 pt-10 pb-12 w-[450px] shadow-md bg-#fff rounded-md">
				<h4>您好！欢迎登录</h4>
				<n-space
					vertical
					class="mt-6"
				>
					<n-input
						size="large"
						placeholder="请输入用户名或者邮箱"
						:maxlength="8"
                        class="mb-2"
					>
                        <template #suffix>
                            <n-icon
                                :size="16"
                                :component="User"
                            />
                        </template>
                    </n-input>
					<n-input
                        type="password"
						size="large"
                        class="mb-1"
                        show-password-on="mousedown"
                        placeholder="请输入密码"
                        :maxlength="8"
                    />
					<div class="flex justify-between items-center">
						<n-checkbox> 记住登录 </n-checkbox>
						<span class="text-blue text-sm">忘记密码?</span>
					</div>
					<n-button
						type="info"
						size="large"
						class="w-full m-t-32px"
                        @click="loginTap()"
					>
						立即登录
					</n-button>
				</n-space>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { User } from '@vicons/carbon';
    import {login} from '@/api/authApi';

	export default defineComponent({
		components: {},
		setup() {
			return {
				User,
			};
		},
        methods: {
            loginTap() {
                login({
                    account: "asd",
                    password: "asd"
                }).then((res: any) => {
                    console.log('res', res)
                })
            }
        }
	});
</script>

<style lang="less" scoped>
	body {
		height: 100%;
	}
</style>
