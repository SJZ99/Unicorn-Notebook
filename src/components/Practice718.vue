<template>
    <div class = 'background'>
        <div class = 'box'>
            <h1>
                {{ message }}
            </h1>
            
        </div>

        <div class ='card1'>

        </div>

        <div class ='card2'>
            <v-btn @click="onclick">
                Button1
            </v-btn>
            <v-btn @click="onclick">
                Button1
            </v-btn>
            <v-btn @click="onclick">
                Button1
            </v-btn>
        </div>

    </div>
</template>


<script>

    export default {
        data:()=>({
            message : "Hello"
           

        }),

        message:{
        },
        computed:
        {
           
            
        },
        component:{
        },
    }
</script>


<style lang="scss" scoped>
.background{
    width: 100vx;
    height :3000px;
    display: flex;
    // align-items: center;
    justify-content:center;

}
 .box{
    position:fixed;
    width :100vw;
    height : 50px;
    background-color:rgba(214,130,198,255);
    display:flex;
    justify-content: center;
    z-index: 3;


 }

 .card1{
    position:relative;
    top: 100px;
    // right: 25vw;
    width :30vw;
    height : 300px;
    background-color: rgba(14,30,92,255);
    border-radius: 25px 25px 0px 0px;
    min-width: 250px;
    
 }
 .card2{
    position:absolute;
    top: 400px;
    // right: 25vw;
    width :30vw;
    height : 100px;
    background-color:rgba(224,154,153,255);
    border-radius: 0px 0px 25px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 250px;
    

 }

 button{

    background-color:rgba(214,130,198,255);
    border-radius: 25px;
    width: 30px;
    font-size: xx-small;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: unset !important;
    
 }
 h1{
    font-weight: 400;
 }
</style>
