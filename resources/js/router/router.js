import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Shop from "../components/Shop";
import Product from "../components/Product";
import AddProduct from "../components/AddProduct";
import Checkout from "../components/Checkout";
import Order from "../components/Order"
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'login',
        component:Login
    },
    //admin
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
        path:'/product',
        name:'product',
        component:Product
    },
    {
        path:'/product/add',
        name:'addProduct',
        component:AddProduct
    },
     {
        path:'/order',
        name:'order',
        component:Order
    },
    // User
    {
        path:'/shop',
        name:'shop',
        component:Shop
    },
    {
        path:'/checkout',
        name:'checkout',
        component:Checkout
    },
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router