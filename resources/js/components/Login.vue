<template>
    <div class="form">
        <form @submit.prevent='login'>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="form.email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'login',
    components:{

    },
    data () {
        return {
            form:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        ...mapActions({
            logIn:'auth/logIn'
        }),
        login() {
            this.logIn(this.form).then(()=>{
                this.$router.replace({
                    name:'dashboard'
                })
            }).catch(()=>{
                console.log('fail')
            })
        }
    }
}
</script>
<style scoped>
    .form{
        margin:0 auto;
        height:100%;
        width: 400px;
        padding: 150px 0;
    }
</style>