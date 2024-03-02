<template>
    <div>
        <Navbar />
        <div class="w-full flex justify-start" style="height:calc(100vh - 57px);overflow: hidden;">
            <Sidebar />
            <main class="w-full">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
    components: {
        Navbar,
        Sidebar
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped></style>
