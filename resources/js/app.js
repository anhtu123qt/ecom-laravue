require('./bootstrap');

require('alpinejs');

require('./store/subscriber.js')

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index"
import axios from "axios";


axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
store.dispatch('auth/attempt',localStorage.getItem('token')).then(() => {
   new Vue({
   router,
   store,
   render : h => h(App)
   }).$mount('#app');
})

