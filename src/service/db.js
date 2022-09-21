// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0bmELi0xAsZbtg7Eb2HxXk56JMOOiX9I",
  authDomain: "brigerbad-vue.firebaseapp.com",
  projectId: "brigerbad-vue",
  storageBucket: "brigerbad-vue.appspot.com",
  messagingSenderId: "826545927266",
  appId: "1:826545927266:web:ce38feddf3b6e948240d3b",
  measurementId: "G-REMW6R1WVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export{
  db
}