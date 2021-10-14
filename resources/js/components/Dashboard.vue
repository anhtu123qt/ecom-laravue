<template>
    <div> 
        <template v-if="authenticated">
            <div>
            Name: {{ authenticated.user.name }}
            Email: {{ authenticated.user.email }}
            </div>
        </template>
        <template v-else>
            <div>
                M la ai?
            </div>
        </template>
    </div>
   
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters({
            authenticated:'auth/authenticated'
        })
    }
}
</script>