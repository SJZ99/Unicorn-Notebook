<template>
    <Header></Header>

<router-view/>

 <EndBox>

</EndBox>


</template>


<script>
import Header from '@/components/Header.vue'
import EndBox from '@/Components/endBox.vue'

 export default {
     
     data:()=>({
    }),
    components:
{
  Header, EndBox

}  
 }
</script>


<style lang="scss" scoped>

</style>
