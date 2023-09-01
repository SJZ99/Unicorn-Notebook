<template>
    <div class="Header ">
        
        
        <div class="headerBox">
            <h2 style="text-align:left">   Unicorn Notebook </h2>

            <div class="text-center">
                <!-- <v-select v-model="location" :items="locations" label="Location"></v-select> -->
            <v-menu  transition="scale-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="gold" dark v-bind="props"> {{page}} </v-btn>
            </template>

            <v-list>
                <v-list-item 
                v-for="(item, index) in items"
                @click="onClick(item) "
                 :key="index">
                   
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </div>
            
        </div>
           
       
    </div>
</template>


<script>
    export default {
        data: () => ({
            items: [
                { title: 'Home Page', url:'homepage' },
                { title: 'Take Note',url:'takenote' },
                { title: 'Set Up for a New Project', url:'setupforanewproject'},
                { title: 'Summary', url: 'summary' },
                { title: 'Login' , url:'login'},
            ],
            locations: ['top', 'bottom', 'start', 'end', 'center'],
            location: 'end',
            page:"Home Page",

           
        }),
        methods:{
            onClick(item){
                this.page= item.title;
                this.$router.push('/'+item.url.toLowerCase())
            }
            
        },

        component:{
        },
    }
</script>


<style lang="scss" scoped>
.headerBox{
    position:fixed;
    width :100vw;
    height : 80px;
    background-color:#031f5b;
    display:flex;
    justify-content:left;
    z-index: 100;
    margin-top: 0;
    align-content: baseline;


}

h2{
    margin-top: 10px;
    font-size:7vmin;
    margin-left: 0.6em;
    color:beige;
    align-self: baseline;
}
.text-center{
    position: absolute;
    top : 30px;
    right: 3.8vw;
    color:  #F0C5C4;
    align-items: center;
}

.v-btn--size-default {
    --v-btn-size: 2vw;
    --v-btn-height: 40px;
    font-size: var(--v-btn-size);
    min-width: 74px;
    padding: 0 16px;
}
 
</style>
