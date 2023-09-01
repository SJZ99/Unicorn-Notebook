<template>
    <div class="box">
        {{message}}
    </div>

    <v-btn @click="onclick">
        Button
    </v-btn>

    <div class="box">
        <label for = "inputfield">Enter Your Namw</label>
         <!-- text  can be replaced by many other stuff like tel or email -->
         <input
            id = "inputfield"
            type = "text"   
            v-model= "message" /> 
            <!--  changing the message shown above into the text entered -->

    </div>
</template>


<script>
    export default {
        data:()=>({ 
            
            message: "hi hi"

        }),

        methods:{
            onclick(){
                this.message += " hi";
            }
        },

       

        component:{
        },
    }
</script>


<style lang="scss" scoped>

.box{
    margin:5vh 20vh 20vh 5vh ;
}
 
</style>
