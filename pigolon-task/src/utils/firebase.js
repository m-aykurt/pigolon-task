import firebase from "firebase/app";
import "firebase/database";
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6s5YGgaNMBHFoajA8DSoWgxHpw_jmSTg",
    authDomain: "pigolon-task.firebaseapp.com",
    projectId: "pigolon-task",
    storageBucket: "pigolon-task.appspot.com",
    messagingSenderId: "689854004467",
    appId: "1:689854004467:web:0605f643c9c999284dcb86"
  });

  export default firebaseApp