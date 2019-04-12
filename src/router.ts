import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  });
}
