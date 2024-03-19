import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active',
	routes: adminRoutes,
});

// 全局前置守卫 beforeEach
router.beforeEach((to, from, next) => {
    next();
});

export default router;
