<template>

<Header>
</Header>

  <div class="page">
   

    <ProgressCard
      group= "策略"
    
      :progress= "progress">
      

    </ProgressCard>

    <ProgressCard
      group= "電資"
      :progress= "progress">
      

    </ProgressCard>

    <ProgressCard
      group= "機構"
      :progress= "progress">
      

    </ProgressCard>
    
    

</div>

</template>


<script>
 import Header from '@/components/Header.vue'
 import ProgressCard from '@/components/ProgressCard.vue'
 import Footer from '@/components/endBox.vue'


  export default {
    props:{
    },
    data:()=>({  
      progress:10
     
    }),

    message:{
    },

    components:{
      ProgressCard,
      Header,
      Footer
    },
  }
</script>


<style lang="css" scoped>
 .page{
 padding-top: 120px;
  width: 100vw;
    height:1200px;
    position: relative;
    display:flex;
    align-content: space-around;
    justify-content: space-around;

}


</style>






<!-- <template>
    <Header/>
    <HomePage/>
    
  </template>
  
  <script setup>
   
    import HomePage from '@/components/HomePage.vue'
    import Header from '@/components/Header.vue';
  </script>
   -->