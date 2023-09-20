import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVWuoZGi1a-ceAiqmd8bNqzW3Kwxz15K4",
    authDomain: "picsfolio-c7d2b.firebaseapp.com",
    projectId: "picsfolio-c7d2b",
    storageBucket: "picsfolio-c7d2b.appspot.com",
    messagingSenderId: "348879013347",
    appId: "1:348879013347:web:7e05735d0d0f362e2accd6",
    measurementId: "G-G7141KS9VD"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);