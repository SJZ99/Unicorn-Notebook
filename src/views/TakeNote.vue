<template>

    <div class="pages">

    
       
        
        <TakeNote>
        
        </TakeNote>

       
    </div>


</template>


<script>

import TakeNote from '@/Components/NoteTaking.vue'


    export default {
        
        data:()=>({

        }),

        message:{
        },

        components:{
            TakeNote,
            
        },
    }
</script>


<style lang="scss" scoped>
.pages{
    
    width: 100vw;
    height:auto;
    position: relative;
    display:flex;
    align-content: center;
    justify-content: center;
}
 
</style>
