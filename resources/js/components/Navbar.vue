<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">TUPA</a>
  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav">
     <template v-if="authenticated && authenticated.user.role == 1">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'dashboard'}">Dashboard</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" :to="{name:'product'}">Product</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" :to="{name:'order'}" >Order</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click="onLogOut">Sign Out</a>
      </li>
      <li class="nav-item ">
        <a href="" class="nav-link">{{ authenticated.user.name }}</a>
      </li>
     </template>
     <template v-if="authenticated && authenticated.user.role == 0">
       <li class="nav-item">
        <a href="#" class="nav-link" @click="onLogOut">Sign Out</a>
      </li>
      <li class="nav-item ">
        <a href="" class="nav-link">{{ authenticated.user.name }}</a>
      </li>
      <router-link class="cart" :to="{name:'checkout'}">
        Cart( <span>{{cartCount}}</span> )
      </router-link>
     </template>
      </ul>
  </div>
</nav>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated:'auth/authenticated',
      user:'auth/user',
      cartCount:'cart/cartCount'
    })
  },
  methods: {
    ...mapActions({
      logOut:'auth/logOut'
    }),
    onLogOut(){
      this.logOut().then(()=>{
        this.$router.replace({
          name:'login'
        })
      })
    }
  }
}
</script>
<style>
.cart {
  margin-left: 983px;
    margin-top: 7px;
}
</style>