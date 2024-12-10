import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACuv7HleytcRHfxe1zS6FMfp3BHuH3DkI",
    authDomain: "summative-c83ff.firebaseapp.com",
    projectId: "summative-c83ff",
    storageBucket: "summative-c83ff.firebasestorage.app",
    messagingSenderId: "513796238711",
    appId: "1:513796238711:web:38ff9c64519edaa3a78572"
  };
  

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };