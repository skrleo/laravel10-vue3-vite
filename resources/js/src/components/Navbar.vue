<template>
	<nav class="h-[57px] text-#000 flex items-center justify-center b-b b-b-gray-1 b-b-solid">
		<div class="w-90% flex justify-between items-center">
			<div class="text-#000 text-xl"> 后台管理系统 </div>
			<div class="flex items-center">
				<n-avatar
					round
					size="medium"
					src="https://www.naiveui.com/assets/naivelogo-XQ1U1Js8.svg"
				/>
				<div class="ml-3">
					<n-dropdown
						trigger="click"
						:show-arrow="true"
						:options="options"
						@select="dropdownEven"
					>
						<n-button
							text
							icon-placement="right"
						>
							<template #icon>
								<n-icon>
									<down-icon />
								</n-icon>
							</template>
							管理员
						</n-button>
					</n-dropdown>
				</div>
			</div>
		</div>
	</nav>
	<n-modal
		v-model:show="showModal"
		preset="dialog"
		title="Dialog"
	>
		<template #header>
			<div>修改密码</div>
		</template>
		<div>内容</div>
		<template #action>
			<div>操作</div>
		</template>
	</n-modal>
</template>

<script lang="ts">
	import { h, defineComponent, ref } from 'vue';
	import { NIcon } from 'naive-ui';
	import { ChevronDown as DownIcon, Exit, Edit, User } from '@vicons/carbon';

	const options = [
		{
			label: '个人中心',
			key: 'user',
			icon() {
				return h(NIcon, null, {
					default: () => h(User),
				});
			},
		},
		{
			label: '修改密码',
			key: 'password',
			icon() {
				return h(NIcon, null, {
					default: () => h(Edit),
				});
			},
		},
		{
			label: '退出登录',
			key: 'logout',
			icon() {
				return h(NIcon, null, {
					default: () => h(Exit),
				});
			},
		}
	];

	export default defineComponent({
		components: {
			DownIcon,
		},
		setup() {
            const showModalRef = ref(false)
			return {
				showModal: showModalRef,
				options,
				dropdownEven(key: string | number) {
                    if (key === 'password') {
                        showModalRef.value = true;
                    }
					console.log(key);
				},
			};
		},
	});
</script>

<style lang="less" scoped></style>

