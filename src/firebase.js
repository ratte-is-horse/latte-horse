// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZI1M8LBc6hYHUmphvlgQpSJjBwHiRPE",
  authDomain: "latte-horse.firebaseapp.com",
  projectId: "latte-horse",
  storageBucket: "latte-horse.appspot.com",
  messagingSenderId: "164412906865",
  appId: "1:164412906865:web:45cb2fdba606e4e1126ad0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
// const analytics = getAnalytics(app);
