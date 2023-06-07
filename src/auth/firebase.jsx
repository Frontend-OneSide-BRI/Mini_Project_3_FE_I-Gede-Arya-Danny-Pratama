// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Htw32g6c1yrxYD1aTr-RhXq8gjd9hZE",
  authDomain: "arya-flix.firebaseapp.com",
  projectId: "arya-flix",
  storageBucket: "arya-flix.appspot.com",
  messagingSenderId: "517983872433",
  appId: "1:517983872433:web:b34384c3a75428fcf14990",
  measurementId: "G-VVZ49B81SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
