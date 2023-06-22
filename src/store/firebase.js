import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbaSBWrYUZk48DtC9ivI2J-Nq0X3RAXmw",
    authDomain: "todolist-d48e9.firebaseapp.com",
    databaseURL: "https://todolist-d48e9-default-rtdb.firebaseio.com",
    projectId: "todolist-d48e9",
    storageBucket: "todolist-d48e9.appspot.com",
    messagingSenderId: "20242535752",
    appId: "1:20242535752:web:0dfec8253e889bb7390f7d",
    measurementId: "G-275H9JEXBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);