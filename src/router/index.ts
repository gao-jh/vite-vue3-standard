import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 路由页
import Home from '@/views/Home/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      icon: '',
    },
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
