// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuyig8Q5CcOSHUflIleK_NSl-GZ_FNhL8",
  authDomain: "react-auth-53ea1.firebaseapp.com",
  projectId: "react-auth-53ea1",
  storageBucket: "react-auth-53ea1.appspot.com",
  messagingSenderId: "40137484228",
  appId: "1:40137484228:web:89281a844d55de260a2691",
  measurementId: "G-KHWTM571DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();