import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Shop from "../components/Shop";
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'login',
        component:Login
    },
    {
        path:'/dashboard',
        name:'dashboard',
        component:Dashboard,
        //middleware
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']) {
                return next({
                    name:'login'
                })
            }
            if(store.getters['auth/authenticated'].user.role === 0) {
                return next({
                    name:'shop'
                })
            }
            next()
        }
    },
    {
        path:'/shop',
        name:'shop',
        component:Shop
    },
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router