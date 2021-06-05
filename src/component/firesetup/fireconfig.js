import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA5RTrRuJlF5nMyU_SozY0bPAPus4v-bjI",
    authDomain: "clone-5ffb4.firebaseapp.com",
    projectId: "clone-5ffb4",
    storageBucket: "clone-5ffb4.appspot.com",
    messagingSenderId: "270470573540",
    appId: "1:270470573540:web:3862c733bb03ea2c6dabf1",
    measurementId: "G-RHX89L3VRK"
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const auth=firebaseapp.auth();
  const db=firebaseapp.firestore();
  db.settings({timestampsInSnapshots:true});
  
  export {auth,db}