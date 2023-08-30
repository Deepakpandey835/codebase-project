// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18Dj_Xx7d5FPHjfwjtU2EOo3HgJa8YxI",
  authDomain: "team-5-2d075.firebaseapp.com",
  projectId: "team-5-2d075",
  storageBucket: "team-5-2d075.appspot.com",
  messagingSenderId: "80919244920",
  appId: "1:80919244920:web:bc193ffcc9cc2593473d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);