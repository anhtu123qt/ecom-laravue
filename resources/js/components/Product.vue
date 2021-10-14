<template>
    <div class="container">
        <h1 class="text-center py-3">PRODUCT</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-for="(product,index) in products" :key="index">
                <tr>
                    <th scope="row">{{product.id}}</th>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.description}}</td>
                    <td>
                        <!-- <button
                        class="btn btn-dark btn-sm"
                        >Edit</button
                        > -->
                        <button @click.prevent="deleteProduct(product.id)"
                        class="btn btn-default btn-danger btn-sm"
                        >
                        Delete
                        </button>
                    </td>
                </tr>
            </tbody>
            <router-link :to="{name:'addProduct'}" class="btn btn-success">Add</router-link>
</table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products:[]
        }
    },
    components: {
     
    },
    methods:{
      getProducts(){
          axios.get('/admin/products').then((response) => {
              this.products = response.data.data;
          })
      },
      deleteProduct(id){
          axios.delete('/admin/products/' + id).then(() => {
              this.getProducts();
          })
      }  
    },
    created() {
        this.getProducts();
    }
}
</script>