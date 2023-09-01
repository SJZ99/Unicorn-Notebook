
  <template>
    <div>

        <div class="pageLogin">
            <Login>

            </Login>

        </div>
    </div>
  </template>
  
  
  <script>

import Login from '@/components/Login.vue'


    export default {
        data:()=>({
  
        }),
  
        message:{
        },
  
        components:{
            Login
        },
    }
  </script>
  
  
  <style lang="css" scoped>
  .pageLogin{
    height: 110vh;
    width: 100vw;
    align-self: center;
    justify-content: center;
    align-content: center;
    display: flex;

  }
   
  </style>
  
  