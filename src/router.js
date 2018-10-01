import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Forget from './views/Forget.vue';
import Revenue from './views/Revenue.vue';
import AccountSet from './views/AccountSet.vue';
import HardList from './views/HardList.vue';
// import Change from './views/Change.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: Revenue,
    },
    {
      path: '/login',
      name: 'login',
      // component: Login,
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),

    },
    {
      path: '/signUp',
      name: 'signUp',
      // component: SignUp,
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue'),
    },
    {
      path: '/forget',
      name: 'forget',
      // component: Forget,
      component: () => import(/* webpackChunkName: "about" */ './views/Forget.vue'),

    },
    {
      path: '/AccountSet',
      name: 'accountSet',
      // component: AccountSet,
      component: () => import(/* webpackChunkName: "about" */ './views/AccountSet.vue'),
      
    },
    {
      path: '/hardList',
      name: 'hardList',
      // component: HardList,
      component: () => import(/* webpackChunkName: "about" */ './views/HardList.vue'),

      // component: () => import(/* webpackChunkName: "HardList" */ './views/HardList.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
