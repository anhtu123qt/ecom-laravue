<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-4" v-for="(product,index) in products" :key="index">
                <div class="card" style="width: 18rem;">
                    <!-- <img src="" class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.price}}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products:{}
        }
    },
    methods: {
         getProducts(){
          axios.get('/admin/products').then((response) => {
              this.products = response.data.data;
          })
      },
    },
    created () {
        this.getProducts();
    }
}
</script>