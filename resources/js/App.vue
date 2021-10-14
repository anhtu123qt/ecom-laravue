<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>
<script>
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Navbar from './components/Navbar.vue';
export default {
    components:{
        Login,
        Dashboard,
        Navbar
    }
}
</script>