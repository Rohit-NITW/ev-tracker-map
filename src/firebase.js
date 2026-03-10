import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyAnyv_1KOcJzoV5vAe8wRZY9ug1x6i4xgw",
authDomain: "location-f65d7.firebaseapp.com",
databaseURL: "https://location-f65d7-default-rtdb.firebaseio.com",
projectId: "location-f65d7",
storageBucket: "location-f65d7.firebasestorage.app",
messagingSenderId: "295635487238",
appId: "1:295635487238:web:6805a274757973d888d187",
measurementId: "G-N7CJ2D5BY1"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
