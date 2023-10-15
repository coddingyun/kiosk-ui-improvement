import { createApp } from 'vue'
import App from './App.vue'
import Button from "@/components/atom/Button";
import Layout from "@/components/organism/Layout";
import Start from "@/page/Start";
import Place from "@/page/Place";
import {createRouter, createWebHashHistory} from 'vue-router';
import { createPinia } from 'pinia';
import SelectMenu from "@/page/SelectMenu";
import CheckBasket from "@/page/CheckBasket";
import Pay from "@/page/Pay";
import Final from "@/page/Final";
import ChangeOrDelete from "@/page/ChangeOrDelete";
import ChangeSide from "@/page/ChangeSide";
import ChangeCoke from "@/page/ChangeCoke";
import FinalCheck from "@/page/FinalCheck";
import ForNotSet from "@/page/ForNotSet";
import Coupon from "@/page/Coupon";


const routes = [
    { path: '/', component: Start },
    { path: '/place', component: Place },
    { path: '/coupon', component: Coupon },
    { path: '/select-menu', component: SelectMenu },
    { path: '/check-basket', component: CheckBasket },
    { path: '/pay', component: Pay },
    { path: '/final', component: Final },
    { path: '/change-or-delete', component: ChangeOrDelete },
    { path: '/change-side', component: ChangeSide },
    { path: '/change-coke', component: ChangeCoke },
    { path: '/final-check', component: FinalCheck },
    { path: '/for-not-set', component: ForNotSet },

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
