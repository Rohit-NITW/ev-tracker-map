import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzqH3C5RPEWT8z6cG8Mmz-B-zzVl_2Wig",
  authDomain: "location-3d5f5.firebaseapp.com",
  databaseURL: "https://location-3d5f5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "location-3d5f5",
  storageBucket: "location-3d5f5.firebasestorage.app",
  messagingSenderId: "212377673145",
  appId: "1:212377673145:web:3e6434d711f88b81cc2a68",
  measurementId: "G-C7V3EQDT5X"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
