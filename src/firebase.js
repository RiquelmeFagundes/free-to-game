// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChMRfHgiffFq2B2VSz25p32LGHY6e4xYU",
  authDomain: "free-to-game-d5ff1.firebaseapp.com",
  projectId: "free-to-game-d5ff1",
  storageBucket: "free-to-game-d5ff1.firebasestorage.app",
  messagingSenderId: "253880142973",
  appId: "1:253880142973:web:13e88bd566789570f8b514",
  measurementId: "G-PKVQV0LWNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
