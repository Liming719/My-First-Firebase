// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPjAWY-7IrH0Rp3k2Xdvc9QN17RiAAnmw",
  authDomain: "my-fisrt-firebase-ca2f7.firebaseapp.com",
  projectId: "my-fisrt-firebase-ca2f7",
  storageBucket: "my-fisrt-firebase-ca2f7.appspot.com",
  messagingSenderId: "180948275456",
  appId: "1:180948275456:web:64d8eec86cc37d9be2a3e5",
  measurementId: "G-F45D4G99RW"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);