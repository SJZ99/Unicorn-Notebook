<template>

    <div class="pages">

    
       
        
        <TakeNote>
        
        </TakeNote>

       
    </div>


</template>


<script>
 import Header from '@/components/Header.vue'
import TakeNote from '@/Components/NoteTaking.vue'
import EndBox from '@/Components/endBox.vue'

    export default {
        
        data:()=>({

        }),

        message:{
        },

        components:{
            TakeNote,
            Header,
            EndBox,
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
