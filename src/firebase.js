// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGXlA3QVoYRwzrBJKfct2zdxaW6_m_xIk",
  authDomain: "huonglan-restaurant-demo.firebaseapp.com",
  projectId: "huonglan-restaurant-demo",
  storageBucket: "huonglan-restaurant-demo.firebasestorage.app",
  messagingSenderId: "935730521538",
  appId: "1:935730521538:web:1d8779c7e318f30be4625b",
  measurementId: "G-GR4KB3C2RX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };