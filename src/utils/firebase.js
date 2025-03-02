// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY-epxn0R_yiaObH5tlfpE-CQqcMwWGeM",
  authDomain: "netflixgpt-11762.firebaseapp.com",
  projectId: "netflixgpt-11762",
  storageBucket: "netflixgpt-11762.firebasestorage.app",
  messagingSenderId: "784805581702",
  appId: "1:784805581702:web:5e9e7bed00531b46581207",
  measurementId: "G-PN5KPG4K8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();