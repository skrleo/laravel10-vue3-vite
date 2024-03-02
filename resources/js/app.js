import { createApp } from 'vue';
import App from '@/App.vue';
import Router from '@/router/router.js';
import Store from '@/store/store.js';

import 'uno.css'
import 'virtual:uno.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

createApp(App).use(Router).use(Store).mount('#app');
