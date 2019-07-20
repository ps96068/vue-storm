import Vue from "vue";
import Router from "vue-router";
import Home from '@/components/Home';
import Orders from '@/components/User/Orders';
import Login from '@/components/Auth/Login';
import Registration from '@/components/Auth/Registration';
import Ad from '@/components/Ads/Ad';
import AdList from '@/components/Ads/AdList';
import NewAdd from '@/components/Ads/NewAdd';

//import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '', name: 'home', component: Home },
    { path: '/orders', name: 'orders', component: Orders },
    { path: '/login', name: 'login', component: Login },
    { path: '/list', name: 'adlist', component: AdList },
    { path: '/registration', name: 'registration', component: Registration },
    { path: '/ad/:id', props: true, name: 'ad', component: Ad },
    { path: '/new', name: 'newadd', component: NewAdd }
  ],
  mode: 'history'
});
