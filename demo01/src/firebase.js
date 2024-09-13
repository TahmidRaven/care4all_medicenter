// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "care4all-1b871.firebaseapp.com",
  projectId: "care4all-1b871",
  storageBucket: "care4all-1b871.appspot.com",
  messagingSenderId: "172322378264",
  appId: "1:172322378264:web:9b8c713b8f06c1c319296d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);