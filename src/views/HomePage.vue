<template>

<Header>
</Header>

  <div class="page">
   
    <div v-if=" note1 != ''">

    <ProgressCard
      :group= "note1"
       @group="(gr)=>note1= gr"
      :progress= "progress"
      @update="(val)=>progress= val"
      
    >
    </ProgressCard>
  </div>

  <div v-if="note2 !=''">
    <ProgressCard
      :group= "note2"
      :progress= "progress"
      @update="(val)=>progress= val">
    </ProgressCard>
  </div>


    <div v-if="note3 != ''">
    <ProgressCard
      :group= "note3"
      :progress= "progress"
      @update="(val)=>progress= val">
    
    </ProgressCard>
  </div>
    

</div>

</template>


<script>
 import Header from '@/components/Header.vue'
 import ProgressCard from '@/components/ProgressCard.vue'
 import Footer from '@/components/endBox.vue'
import { getUserNotes } from '@/plugins/fireBase'


  export default {
 
    props:{
      
    },
    data:()=>({  
      progress:10,
      note1:"",
      note2:"",
      note3:"",
           
     
    }),

  created(){
    
      
    getUserNotes().then((noteArr)=>{
                this.note1=noteArr[0];
                this.note2=noteArr[1];
                this.note3=noteArr[2];
            
            })
            .catch((errorMessage)=>{
                console.log(errorMessage);

            })

    },
    message:{
    },

    components:{
      ProgressCard,
      Header,
      Footer,
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