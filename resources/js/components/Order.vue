<template>
    <div class="container">
        <h1 class="text-center py-3">ORDER</h1>
          <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody v-for="(order,index) in orders" :key="index">
                <tr>
                    <th scope="row">{{order.id}}</th>
                    <td>{{order.name}}</td>
                    <td>{{order.email}}</td>
                    <td>{{order.total}}</td>               
                </tr>
            </tbody>
            </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            orders:[]
        }
    },
    methods:{
        getOrders(){
            axios.get('/admin/order').then((response) => {
                this.orders = response.data.data;
                console.log(response.data.data)
            })
        }
    },
    created(){
        this.getOrders();
    }
}
</script>