'use client'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB9cH8bojJ1lWxwvo0rkaB75VDWoZRNAjw",
    authDomain: "candeller.firebaseapp.com",
    projectId: "candeller",
    storageBucket: "candeller.appspot.com",
    messagingSenderId: "469783033127",
    appId: "1:469783033127:web:379d77af0cc58cf8196502"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
