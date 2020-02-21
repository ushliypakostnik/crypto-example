import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Views/Home.vue';
import Main from '@/components/Views/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: "Main" },
      children: [
        {
          path: "/main",
          name: "Main",
          component: Main,
        },
        {
          path: "/404",
          name: "NotFound",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "NotFound" */ '@/components/Views/NotFound'),
        },
      ],
    },
    {
      path: "*",
      redirect: { name: "NotFound" },
    },
],
});
