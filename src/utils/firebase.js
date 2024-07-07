// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3cxoYbzEJaTJr_i0jaeZJwuOpO-q3nSQ",
  authDomain: "watch-wave-24b5a.firebaseapp.com",
  projectId: "watch-wave-24b5a",
  storageBucket: "watch-wave-24b5a.appspot.com",
  messagingSenderId: "680447526874",
  appId: "1:680447526874:web:75558afbb08182e9d922e3",
  measurementId: "G-RBG5QH0S3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);