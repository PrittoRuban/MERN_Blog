// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-82e99.firebaseapp.com",
  projectId: "mern-blog-82e99",
  storageBucket: "mern-blog-82e99.appspot.com",
  messagingSenderId: "527432034127",
  appId: "1:527432034127:web:e8b7bd8d6be153f772073a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
