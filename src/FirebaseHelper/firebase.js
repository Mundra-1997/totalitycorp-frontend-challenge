// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {apiKey: "AIzaSyAaGPV-uS1mlijK2pHcUPwUYpoW8EA6Xto",authDomain: "snap-cd9d9.firebaseapp.com",projectId: "snap-cd9d9",storageBucket: "snap-cd9d9.appspot.com",messagingSenderId: "26140842996",appId: "1:26140842996:web:ea5478b1008f3a712ef7a1",measurementId: "G-6JRX3G1ZM2"}

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
export default auth;