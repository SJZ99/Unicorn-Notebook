// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc,addDoc, query, where, getDocs,orderBy } from "firebase/firestore";
import { getAuth,setPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmgkAETyShZFXkLJyuHY73AC_kDTUHOO4",
  authDomain: "unicorn-notebook.firebaseapp.com",
  projectId: "unicorn-notebook",
  storageBucket: "unicorn-notebook.appspot.com",
  messagingSenderId: "1072055798292",
  appId: "1:1072055798292:web:0208f563e34845bf493501",
  measurementId: "G-DE53B6VLGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);

const db = getFirestore(app);

Date.getDateString = function() {
    let date = new Date();
    return String(date.getFullYear()) + "_" + String(date.getMonth() + 1).padStart(2, '0') + "_" + String(date.getDate()).padStart(2, '0');
}






import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { reject } from "core-js/fn/promise";
// import { resolve } from "core-js/fn/promise";

const storage = getStorage();

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'

async function uploadImage(file){

  return new Promise ( (happy, reject)=>{ 
    // Create a reference to 'mountains.jpg'
    const pictureRef = ref(storage, Date.getDateString()); //照片的資料夾
  
    // Create a reference to 'images/mountains.jpg'
    const pictureImagesRef = ref(pictureRef, Date.now()+'jpg'); //照片本人

    const uploadTask = uploadBytesResumable(pictureImagesRef, file, metadata);
  
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
  
        let state ='';
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            state = 'unauthorized';
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            state= 'canceled'
            // User canceled the upload
            break;
  
          // ...
  
          case 'storage/unknown':
            state= "unknown";
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
  
        reject (state);
  
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((  downloadURL) => {
         happy(downloadURL);


       
        });
      }
      );
   

  })

}


  async function getProgressSlider(dateToday, group){
    var slider=[];
    console.log("slider");
   try{
         const q = query(collection(db, "Notebook"), where("date", "==", dateToday),where("group","==",group));
   
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
           // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log("slider"+ doc.data().slider);
           slider.push(doc.data().slider);
         });
   
        
         
         return slider;
     }  
     catch(e){
       console.error("Error finding slider progress: ", e);
     }
   
   
   }




async function uploadText(group,date,image, member, slider, progress, problem, plan, imgBool){


  try {
    const docRef = await addDoc(collection(db,"Notebook/"), {
      user: getAuth().currentUser.uid,
      group: group,
      date: date,
      image : image,
      member : member,
      slider: slider,
      progress: progress,
      problem: problem,
      plan: plan,
      imgBool:imgBool,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

// searching database




async function getPhotoForPreview(dateToday, group){
 var imgUrl=[];
 
try{
      const q = query(collection(db, "Notebook"), where("date", "==", dateToday),where("imgBool","==","1"),where("group","==",group));
      const q2 = query(collection(db, "Notebook"), where("date", "==", dateToday),where("imgBool","==","0"),where("group","==",group));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
         console.log(doc.data().image);
         console.log(group);
        imgUrl.push(doc.data().image);
      });

      if(imgUrl.length==0){
        const querySnapshot = await getDocs(q2);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          // console.log(doc.data().image);
          imgUrl.push(doc.data().image);
        });
      }
      
      return imgUrl;
  }  
  catch(e){
    console.error("Error finding img url: ", e);
  }


}



self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6LcoyOcnAAAAANiMF1X-DEM-K_iRTcf21GMwWaJq"),
  isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});

const auth = getAuth();
auth.setPersistence(auth.Auth.Persistence.LOCAL)
        .then(() => auth.signInWithCustomToken(token));


async function signIn( email, password){

  return new Promise((resolve, reject)=>{

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
      resolve(user);

  }
  )
  .catch((error)=>{

    const errorMessage = error.message;

    reject(errorMessage);


  })
}
  )
}

  let userString = auth.currentUser.uid;
  async function getUserNotes(){
  var userNotes=[];

  console.log(userString+"!!!"+"look here");
  
 try{
       const q = query(collection(db, "UserInformation"), where("user", "==","WmS4EGjVqUVJ8AqrxYjBa8ctMaH3"));

 
       const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
        //  console.log(doc.id, " => ", doc.data());
        //  console.log(doc.data().note1+" "+doc.data().note2+" "+ doc.data().note3);
         userNotes.push(doc.data().note1);
         userNotes.push(doc.data().note2);
         userNotes.push(doc.data().note3);
       });
 

       return userNotes;
   }  
   catch(e){
     console.error("Error finding img url: ", e);
   }
 
 
 }
 

export {
  uploadImage, getDownloadURL, uploadText, signIn, auth, getPhotoForPreview,getUserNotes, getProgressSlider
}

