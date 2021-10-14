<template>
    <div> 
        <template v-if="authenticated">
            <h1 class="text-center py-3">Hello {{authenticated.user.name}}</h1>
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
    },
    components: {
    
    }
}
</script>
<style scoped>
.side-bar {
    height: 500px;
}
</style>