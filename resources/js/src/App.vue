<template>
    <NConfigProvider
        class="h-full"
    >
        <NaiveProvider>
            <RouterView />
        </NaiveProvider>
    </NConfigProvider>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
    import { NaiveProvider } from '@/components/common'

	export default defineComponent({
		components: {},
		setup() {
			return {};
		},
	});
</script>

<style lang="less" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
	.main {
		width: 100%;
		margin: 0 auto;
	}
</style>
