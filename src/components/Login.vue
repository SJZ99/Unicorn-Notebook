<template>
    <div>
        <div class="pageLogin">
            <div class= "box">

                <v-form  @submit.prevent="login()">
                    <v-text-field
                        v-model="userName"
                        label="Email"
                        required
                        type="email"
                        :rules="emailRules"
                        
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                        type="password"
                    ></v-text-field>
                <v-btn block class="mt-2" type="submit">Login</v-btn>
                <v-btn  block class="mt-2">Create Account</v-btn>
                </v-form>
                
            </div>

            <v-img class="mx-auto" content
                            src="@/assets/welcome.png"

                            width="20vw"
                            cover
                            align-self="center"
                        
                            >
                </v-img>
            </div>
       

                

    </div>
</template>


<script>
import { signIn } from '@/plugins/fireBase';

    export default {
        data:()=>({
            userName: "",
            password: "",
            user:"",
            emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },]

        }),

        message:{
        },

        components:{
            
        },
        computed:{
    
        },
        methods:{
            async login() {

        
                signIn(this.userName,this.password).then((user) => {
                this.user =user;

                    this.$router.push('/welcome');

                    setTimeout(() => {
                    this.$router.push('/homepage');
                    }, 1500);



               

               
        
           

            


                })
                // 失敗的行為一律交給了 catch
                .catch((errorMessage) => {
                    window.alert(errorMessage);
                    console.log(errorMessage);

                });




},
       

        },
    }
</script>


<style lang="css" scoped>
.box{

    position:relative;
    width :40vw;
    height :auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
    padding-left: 40px;
    display:space-around;
    justify-content:center;
    align-self: center;
    justify-self: center;
    border-style: solid;
  border-color: #92a8d1;
    margin-top: 28vh;
}
 
.v-img_img{
    position:relative;
    left: 60px;



}

.pageLogin{
    height: auto;
    width: 100vw;
    align-self: center;
    justify-content: center;
    align-content: center;
    display:contents;

  }
</style>
