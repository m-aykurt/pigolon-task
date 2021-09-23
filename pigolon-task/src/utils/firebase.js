import firebase from "firebase/app";
import "firebase/database";
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRffF_fdZmmDRpwn2yE-ADvpp6CHBT_qo",
    authDomain: "pigolon-proj.firebaseapp.com",
    projectId: "pigolon-proj",
    storageBucket: "pigolon-proj.appspot.com",
    messagingSenderId: "697374288661",
    appId: "1:697374288661:web:85ea87ada0763782f3971c"
  });

  export default firebaseApp