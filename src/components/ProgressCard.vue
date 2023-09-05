<template>
    <div>
        
            
            <div class="progress-card">
              
                    <div class = "circle"> 
                        


                        <img 
                            :src= "img"
                            >

                            <!-- <v-img
                            contain
                          
                            width= 100vw
                            height=auto
                            :src= "img"
                            border-radius="50%"
                            ></v-img> -->
                        
                        
                    
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
import { getPhotoForPreview, getUserNotes } from '@/plugins/fireBase';
import noImage from '@/assets/noImage.png';
import noNotes from '@/assets/noNotes.png'
    export default {

        mounted() { 

                    this.$emit("group", this.group);
                    console.log(this.group+"noEmit");


                getPhotoForPreview(this.dateFormatted, this.group)
                .then((imgArr)=>{
                    console.log(this.group+"wiefjlgjhl");
                    let realUrl="";
                console.log(imgArr);
                    if(imgArr.length==0){
                        realUrl=  noNotes
                    }
                    else if(imgArr[0]=="noImg"){ 
                        realUrl= noImage;
                    }
                    else { realUrl=  imgArr[0];}
                    console.log(realUrl);
                    this.img=realUrl;
                    return realUrl;
                })
                .catch((value)=>{

                    console.log("{wrong}");

                })
            },
        props:{
            group: String,
            progress: Number,
            imageSrc: String,

        },
        data:vm => ({
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
           dateFormatted:vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
           img:"",
          
     
        }),
        computed:{

           
        

        },
        methods: {
            formatDate (date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            parseDate (date) {
                if (!date) return null

                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
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
    justify-content:center;
    align-content: center;
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

img{
    
    border-radius:50%;
    align-self: center;

    width: 24vw;
    height:24vw;
    
    }
</style>
