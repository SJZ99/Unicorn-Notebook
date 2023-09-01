

<template>
    <div class="page">
        <div class="boxNotes">
       
          <v-form
            @submit.prevent="submit"
           
          >
              <v-select
              label="Choose Group"
              :items= items
              v-model= selected
              ></v-select>





                            <v-img

              :width="300"
               
                :src="imageComputer"

              ></v-img>
              
              <v-file-input
                  chips
                  multiple
                  label="File input w/ chips"
                  accept="image/*"
                  v-model="file"
                  @update:model-value="onImageSelected"

              ></v-file-input>

              
              <!-- <h4>Date:
              <input type="datetime-local" id="Test_DatetimeLocal">
          </h4>
              -->
           
            
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    @blur="date = parseDate(dateFormatted)"
                    :rules="dateRules"

                  
                  ></v-text-field>
               
              
                  

      
            <v-text-field
              v-model="Members"
              label="Members"
              required
            ></v-text-field>

              
      
              
              
          <div class="text-caption">Show thumb when using slider</div>
          <v-slider v-model="slider1" thumb-label

          color= #95b8d1
          track-color=#eac4d5
          max-width="290px"
              min-width="auto"
        
          ></v-slider>

          <!-- <h2> Progress</h2> -->
          <v-textarea label="Today's Progress"
          
          v-model="progress"></v-textarea>
          <!-- <h2> Problem Faced</h2> -->
          <v-textarea label="Problem Faced"
          
          v-model="problem"></v-textarea>

          <v-textarea label="Plan for Tomorrow"
          
          v-model="plan"></v-textarea>
          <v-btn
          :loading="loading"
          type="submit"
          block
          class="mt-2"
          text="Submit"
        ></v-btn>
        
        </v-form>  

        
    </div>
    
    
    </div>


   
       
</template>


<script>

import { getAuth, uploadImage } from '@/plugins/fireBase.js';
import { getDownloadURL } from 'firebase/storage';

import { uploadText } from '@/plugins/fireBase.js';
import addNewPhoto from '@/assets/addNewPhoto.png'

    export default {
    
  
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      items : ['電資', '機構', '策略'],
      selected : "",
        file : [],
        Members: '',
        slider1: 0,
        progress: "",
        problem: "",
        plan: "",
        loading: false,
        previewUrl:"",
        test: getAuth.currentuser,
        dateRules:[

        (date) => {

          console.log(date);
          let rule= /\d\d\/\d\d\/\d\d\d\d/;
          if(!rule.test(date)){
            return "please follow the MM/DD/YYYY rule";

          }

          else return true;

        },
         

          (date) => {
            let [m, d, y] = date.split("/");
            let input = new Date(y, m - 1, d);
            let today = new Date ;
            console.log(input)
            if (today.getTime() - input.getTime()>86400000*100)
            return "Too old date";
        
            let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                console.log(tomorrow);
            if(input.getTime() >= tomorrow.getTime()) {
              return "You cannot travel to the future" ;
            }
            return true;

          }
        ],

        
      rules: [value => vm.checkApi(value)],
      timeout: null,
      url:'',
    }),


    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      
      imageComputer(){
        if(this.previewUrl=="") return addNewPhoto;

        else return this.previewUrl;

      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      onImageSelected(file){
        if (file[0]==null){
          previewUrl= "";
        }

        else{
          this.previewUrl = URL.createObjectURL(file[0]);
        }

      },
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

      async submit() {

        
        uploadImage(this.file[0])
        .then((downloadURL) => {
          console.log(downloadURL);
           this.url =downloadURL;
           
           uploadText(this.selected, this.dateFormatted, this.url, this.Members, this.slider1, this.progress, this.progress, this.plan);
           this.$router.push('/submitted');
        
        })
        // 失敗的行為一律交給了 catch
        .catch((state) => {
         this.url = state

        });


        

      },
      async checkApi(userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')
            if (userName === 'johnleider')
              return resolve('User name already taken. Please try another one.')

            return resolve(true)
          }, 1000)
        })
      },
      
    },
  


        
   
        message:{
        },

        components:{ 
          
        },
    }
</script>


<style lang="scss" scoped>
 .page{
position: relative;
margin-top: 120px;
margin-bottom: 100px;
 height: auto;
 width: 100vw;
 display: flex;
 justify-content: center;

}


.boxNotes{
    width: 90vw;
    height: 1200px;
    background-color:white;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.v-col-xxl, .v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-11, .v-col-xxl-10, .v-col-xxl-9, .v-col-xxl-8, .v-col-xxl-7, .v-col-xxl-6, .v-col-xxl-5, .v-col-xxl-4, .v-col-xxl-3, .v-col-xxl-2, .v-col-xxl-1, .v-col-xl, .v-col-xl-auto, .v-col-xl-12, .v-col-xl-11, .v-col-xl-10, .v-col-xl-9, .v-col-xl-8, .v-col-xl-7, .v-col-xl-6, .v-col-xl-5, .v-col-xl-4, .v-col-xl-3, .v-col-xl-2, .v-col-xl-1, .v-col-lg, .v-col-lg-auto, .v-col-lg-12, .v-col-lg-11, .v-col-lg-10, .v-col-lg-9, .v-col-lg-8, .v-col-lg-7, .v-col-lg-6, .v-col-lg-5, .v-col-lg-4, .v-col-lg-3, .v-col-lg-2, .v-col-lg-1, .v-col-md, .v-col-md-auto, .v-col-md-12, .v-col-md-11, .v-col-md-10, .v-col-md-9, .v-col-md-8, .v-col-md-7, .v-col-md-6, .v-col-md-5, .v-col-md-4, .v-col-md-3, .v-col-md-2, .v-col-md-1, .v-col-sm, .v-col-sm-auto, .v-col-sm-12, .v-col-sm-11, .v-col-sm-10, .v-col-sm-9, .v-col-sm-8, .v-col-sm-7, .v-col-sm-6, .v-col-sm-5, .v-col-sm-4, .v-col-sm-3, .v-col-sm-2, .v-col-sm-1, .v-col, .v-col-auto, .v-col-12, .v-col-11, .v-col-10, .v-col-9, .v-col-8, .v-col-7, .v-col-6, .v-col-5, .v-col-4, .v-col-3, .v-col-2, .v-col-1 {
padding: 0px;
width: 100%;
}

::v-deep .v-label {
  font-size: 1.2em
}



</style>
