<template>
	<div class="w-[215px] b-r b-r-gray-1 b-r-solid">
		<n-layout has-sider>
			<n-menu
                :options="menuOptions"
                key-field="whateverKey"
                label-field="whateverLabel"
                children-field="whateverChildren"
            />
			<n-layout />
		</n-layout>
	</div>
</template>

<script lang="ts">
	import { defineComponent, h, ref, Component } from 'vue';
	import { NIcon } from 'naive-ui';
	import type { MenuOption } from 'naive-ui';
    import { User } from '@vicons/carbon';

	function renderIcon(icon: Component) {
		return () => h(NIcon, null, { default: () => h(icon) });
	}

	const menuOptions: MenuOption[] = [
		{
			whateverLabel: '且听风吟',
			whateverKey: 'hear-the-wind-sing',
			icon: renderIcon(User),
		},
		{
			whateverLabel: '1973年的弹珠玩具',
			whateverKey: 'pinball-1973',
			icon: renderIcon(User),
			disabled: true,
			whateverChildren: [
				{
					whateverLabel: '鼠',
					whateverKey: 'rat',
				},
			],
		},
		{
			whateverLabel: '寻羊冒险记',
			whateverKey: 'a-wild-sheep-chase',
			disabled: true,
			icon: renderIcon(User),
		},
		{
			whateverLabel: '舞，舞，舞',
			whateverKey: 'dance-dance-dance',
			icon: renderIcon(User),
			whateverChildren: [
				{
					type: 'group',
					whateverLabel: '人物',
					whateverKey: 'people',
					whateverChildren: [
						{
							whateverLabel: '叙事者',
							whateverKey: 'narrator',
							icon: renderIcon(User),
						},
						{
							whateverLabel: '羊男',
							whateverKey: 'sheep-man',
							icon: renderIcon(User),
						},
					],
				},
				{
					whateverLabel: '饮品',
					whateverKey: 'beverage',
					icon: renderIcon(User),
					whateverChildren: [
						{
							whateverLabel: '威士忌',
							whateverKey: 'whisky',
						},
					],
				},
				{
					whateverLabel: '食物',
					whateverKey: 'food',
					whateverChildren: [
						{
							whateverLabel: '三明治',
							whateverKey: 'sandwich',
						},
					],
				},
				{
					whateverLabel: '过去增多，未来减少',
					whateverKey: 'the-past-increases-the-future-recedes',
				},
			],
		},
	];
	export default defineComponent({
		components: {},
		setup() {
			return {
				collapsed: ref(false),
				menuOptions,
			};
		},
	});
</script>

<style lang="less" scoped></style>

