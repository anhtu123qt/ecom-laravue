<template>
    <div class="container py-5">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in cart" :key="index">
                    <td>{{item.product.name}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.qty*item.product.price}}</td>
                </tr>
                <tr>
                    <td><h3>Total</h3></td>
                    <td><h3 v-text="cartQty"></h3></td>
                    <td><h3 v-text="cartTotal"></h3></td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-success btn-lg w-100" @click="checkOut">Check Out</button>
        <hr>
        <button class="btn btn-primary btn-lg w-100" @click="home">Go Back</button>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters({
            cart:'cart/cart',
            user:'auth/user'
        }),
        cartQty(){
            return this.cart.reduce((acc,item)=> acc + item.qty,0)
        },
        itemTotal(){
            return this.cart.reduce((acc,item) => acc + (item.qty * item.product.qty),0)
        },
        cartTotal(){
            return this.cart.reduce((acc,item) => acc + (item.product.price * item.qty),0)
        }
    },
    methods:{
        checkOut(){
            let orderDetail = [];
            orderDetail.push(this.user.user.name)
            orderDetail.push(this.user.user.email)
            // orderDetail.push(this.cart)
            orderDetail.push(this.cartTotal)
            // console.log(orderDetail)
            axios.post('/purchase',{
                name:orderDetail[0],
                email:orderDetail[1],
                total:orderDetail[2]
            }).then((response) => {
                localStorage.removeItem('cart')
                this.$router.go()
            }).catch((error)=>{
                console.error(error)
            })
        },
        home() {
            this.$router.replace({name:"shop"})
        }
    }
}
</script>