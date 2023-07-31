// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATBxlYlU_TDKMph-MWki8NVVrXbprSsmA",
  authDomain: "mystore-6099f.firebaseapp.com",
  projectId: "mystore-6099f",
  storageBucket: "mystore-6099f.appspot.com",
  messagingSenderId: "931888237042",
  appId: "1:931888237042:web:5bbbd88b073328bf03436b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};