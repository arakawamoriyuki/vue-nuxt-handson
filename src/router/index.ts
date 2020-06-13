import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Todo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
