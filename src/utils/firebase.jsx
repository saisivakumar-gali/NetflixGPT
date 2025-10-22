// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-I2qzw19VCm9dgSh68WqqJvpxpu2iA4",
  authDomain: "netflixgpt-8ed1d.firebaseapp.com",
  projectId: "netflixgpt-8ed1d",
  storageBucket: "netflixgpt-8ed1d.firebasestorage.app",
  messagingSenderId: "708945330599",
  appId: "1:708945330599:web:227ed8f5ae322d4f373682",
  measurementId: "G-TLJMK5RR8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();