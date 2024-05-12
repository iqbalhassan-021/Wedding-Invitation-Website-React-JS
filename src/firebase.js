
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcvLzBPwmRiDQAOwHMDTgpHOtUZD4c0PU",
  authDomain: "weddingwebsite-d5fde.firebaseapp.com",
  projectId: "weddingwebsite-d5fde",
  storageBucket: "weddingwebsite-d5fde.appspot.com",
  messagingSenderId: "311227661973",
  appId: "1:311227661973:web:e687d771608436b318259c",
  measurementId: "G-4TQKH0QL70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);