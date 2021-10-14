import axios from "axios"
import { attempt } from "lodash"

export default {
    namespaced:true,
    state:{
        token:null,
        user:null
    },
    getters: {
        authenticated(state){
            return state.token && state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations:{
        set_token(state,token) {
            state.token = token
        },
        set_user(state,data){
            state.user = data
        }

    },
    actions:{
        async logIn ({dispatch},credentials) {
            let response = await axios.post('/auth/login',credentials)

            return dispatch('attempt',response.data.token)
        },
        async attempt({commit,state},token) {
            if(token){
                commit('set_token',token)
            }
            if(!state.token){
                return
            }
            try {   
                let response = await axios.get('/auth/me')

                commit('set_user',response.data)
            }
            catch(e){
                commit('set_token',null)
                commit('set_user',null)
            }
        },
        logOut({commit}){
            return axios.get('/auth/logout').then(()=>{
                commit('set_token',null)
                commit('set_user',null)
            })
        }
    },
}