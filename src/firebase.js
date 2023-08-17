// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydmoRX2ivjqQq-4fbbhe6L5mwYGuO96o",
  authDomain: "cityhospital-be742.firebaseapp.com",
  projectId: "cityhospital-be742",
  storageBucket: "cityhospital-be742.appspot.com",
  messagingSenderId: "275196771093",
  appId: "1:275196771093:web:378ae72795f0f2a3a2071c",
  measurementId: "G-YT1QPCMWST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);