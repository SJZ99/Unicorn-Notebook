<template>
    <div>
        
            
            <div class="progress-card">
                <h1>{{ imgUrl }}</h1>
              
                    <div class = "circle"> 
                        
                        <v-img
                            contain
                          
                            width= 100vw
                            height=auto
                            :src= "imgUrl"
                            ></v-img>
                        
                    
                    </div>

                    <h2> {{group}}</h2>
                    <v-progress-linear :model-value="progress" color="blue-grey" height="25" width="50%" @update:model-value="(val)=> $emit('update', val)">
                        <template v-slot:default="{ value }">
                            <strong>{{ Math.ceil(value) }}%</strong>
                        </template>
                    </v-progress-linear>
                

            </div>
            
            
    
    </div>
</template>


<script>
import { getPhotoForPreview } from '@/plugins/fireBase';
import noImage from '@/assets/noImage.png';
import noNotes from '@/assets/noNotes.png'
    export default {
        props:{
            group: String,
            progress: Number,
            imageSrc: String,

        },
        data:vm => ({
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateFormatted: "08/31/2023",
           
        }),
        computed:{

           imgUrl( ){
            let imgArr=getPhotoForPreview(this.dateFormatted);
            
                if(imgArr.length==0){
                    return  noImage
                }
                else if(imgArr[0]==""){
                    return noNotes;
                }
                else  return  imgArr[0];
           },
        

        },

        message:{
        },

        component:{
            
        },
    }
</script>


<style lang="scss" scoped>

.circleBox{

    display : flex;
    justify-content: space-around;
    width: 70 vw;
    background-color:rgb(255, 255, 255);
    height:  300px;
    position: relative;

}
.circle{
    width: 25vw;
    height:25vw;
    border-radius: 50%;
    background-color:#809bce ;
    z-index: 5;
    position: absolute;
    align-content: center;
    justify-content: center;
    display: flex;
    

}
.headerBox{
    position:relative;
    width :100vw;
    height : 100px;
    background-color:#ffffff;
    display:flex;
    justify-content:left;
    z-index:0;
    margin-top: 0;
}

.progress-card{

display : flex;
justify-content:center;
width: 20vw;
background-color:white;
height:  1200px;
position:relative;
z-index: -6;

}

.page{
position: absolute;
margin-top: 120px;
 height: 3000px;
 width: 100vw;
 display: flex;
 align-items:flex-start;
 justify-content: center;




}
.v-progress-linear {
    background: transparent;
    overflow: hidden;
    position:absolute;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    margin-top: 30vw;
}

h2{
    position: relative;
    z-index: 15;
    margin-right:28vw;

}
</style>
