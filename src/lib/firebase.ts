import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcFIPWOhnNfyhPkX7rE2J1g0wxf60Pibc",
  authDomain: "money-king-it.firebaseapp.com",
  projectId: "money-king-it",
  storageBucket: "money-king-it.firebasestorage.app",
  messagingSenderId: "855128264110",
  appId: "1:855128264110:web:f0edfe90a9376e507c8c3f",
  measurementId: "G-WPPG4GZ972"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);