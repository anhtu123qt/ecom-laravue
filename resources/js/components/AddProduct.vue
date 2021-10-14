<template>
  <div class="container">
    <h2 class="text-center py-5">ADD NEW PRODUCT</h2>
    <form @submit.prevent="saveProduct()">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
        v-model="product.name"
          autocomplete="off"
          type="text"
          class="form-control"
         
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Price</label
        >
        <input
        v-model="product.price"
          autocomplete="off"
          type="text"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description</label
        >
        <input
        v-model="product.description"
          autocomplete="off"
          type="text"
          class="form-control"
          
        />
      </div>
      <button class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"",
            price:"",
            description:"",
            product:{}
        }
    },
    methods: {
        saveProduct(){
            axios.post('/admin/products',this.product).then(()=>{
                this.$router.replace({
                    name:"product"
                    })
            })
        }
    }
}
</script>