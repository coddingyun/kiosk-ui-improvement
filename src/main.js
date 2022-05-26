import { createApp } from 'vue'
import App from './App.vue'
import Button from "@/components/atom/Button";
import Layout from "@/components/organism/Layout";
import Start from "@/page/Start";
import Place from "@/page/Place";
import {createRouter, createWebHashHistory} from 'vue-router';
import { createPinia } from 'pinia';
import SelectMenu from "@/page/SelectMenu";
import Coupon from "@/page/Coupon";


const routes = [
    { path: '/', component: Start },
    { path: '/place', component: Place },
    { path: '/coupon', component: Coupon },
    { path: '/select-menu', component: SelectMenu },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);

app.component(Button.name, Button)
app.component(Layout.name, Layout)
app.mount('#app')
