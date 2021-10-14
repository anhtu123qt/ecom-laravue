import axios from "axios";
function updateLocalStorage(cart) {
    localStorage.setItem('cart',JSON.stringify(cart))
}

export default{
    namespaced:true,
    state:{
        products:[],
        cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        order:{}
    },
    getters: {
        products(state){
            return state.products.data;
        },
        cartCount(state){
            return state.cart.length;
        },
        cart(state) {
            return state.cart;
        }
    },
    mutations:{
        set_products(state,products) {
            state.products = products;
        },
        add_to_cart(state,{product,qty}) {
            let productExist = state.cart.find(item => {
                return item.product.id === product.id
            })
            if(productExist) {
                productExist.qty ++;
                updateLocalStorage(state.cart)
                return;
            }
            state.cart.push({product,qty}) 
            updateLocalStorage(state.cart)
        },
        
    },
    actions:{
        getProducts({commit}){
             axios.get('admin/products').then((response) => {
                commit('set_products',response.data);
            })
        },
        addToCart({commit},{product,qty}) {
            commit('add_to_cart',{product,qty});
        }
    },
}