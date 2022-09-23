// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8cJBx6g432tpAjnt9w5-dXNWaj3kONw",
  authDomain: "react-curso-b6dcc.firebaseapp.com",
  projectId: "react-curso-b6dcc",
  storageBucket: "react-curso-b6dcc.appspot.com",
  messagingSenderId: "1087086939172",
  appId: "1:1087086939172:web:2327529753e9f778e0dcb1",
  measurementId: "G-C17JF86WK7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth( FirebaseApp );
export const FirebaseDB= getFirestore( FirebaseApp );

//const analytics = getAnalytics(app);