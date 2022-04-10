// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDkcb51_CxkhS2xTqM-xtuuwP1mOGWUGlI",
    authDomain: "project-549d3.firebaseapp.com",
    projectId: "project-549d3",
    storageBucket: "project-549d3.appspot.com",
    messagingSenderId: "746036414994",
    appId: "1:746036414994:web:1a866488635a6c70c8e6cb",
    measurementId: "G-VNHM652Q8R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };