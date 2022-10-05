import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyyULbeOMWP2i2Wj3ZFPBDBJq3p5H9FJ0",
    authDomain: "koda-pet-shop.firebaseapp.com",
    projectId: "koda-pet-shop",
    storageBucket: "koda-pet-shop.appspot.com",
    messagingSenderId: "862141641157",
    appId: "1:862141641157:web:63e7af5cb46ff90699dbac"
  };

  const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);