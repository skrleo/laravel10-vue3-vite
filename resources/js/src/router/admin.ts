import { setupLayouts } from 'layouts-generated';

const routes = setupLayouts([
	{
		path: '/',
		component: () =>  import("@/layouts/Basic.vue"),
        redirect: { name: "home" },
        children: [
            {
              path: '/home',
              name: "home",
              component: () =>  import("@/pages/Home.vue"),
            },
            {
                path: '/about',
                component: () =>  import("@/pages/About.vue"),
            },
            {
                path: '/same-page',
                component: () =>  import("@/pages/SomePage.vue"),
            }
        ]
	},
	{
		path: '/login',
		component: () =>  import("@/pages/Login.vue"),
	},
    {
        path: '/404',
        name: 'NotFound',
        meta: {
          title: 'Page Not Found'
        },
        component: () => import("@/pages/error/404.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]);

export default routes;
