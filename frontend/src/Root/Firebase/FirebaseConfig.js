// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDre8hczoQGhc0l3kB8Ivk8bRcAr6y7bEY",
  authDomain: "geniuscar-44abf.firebaseapp.com",
  projectId: "geniuscar-44abf",
  storageBucket: "geniuscar-44abf.appspot.com",
  messagingSenderId: "1018047969171",
  appId: "1:1018047969171:web:d43a1f63199cdc7d2f1a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app