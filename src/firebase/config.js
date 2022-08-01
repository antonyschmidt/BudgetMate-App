import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCeVPzd38fccEidPKb0nspb_BmVrj9QS8k",
    authDomain: "budget-mate.firebaseapp.com",
    projectId: "budget-mate",
    storageBucket: "budget-mate.appspot.com",
    messagingSenderId: "722000171185",
    appId: "1:722000171185:web:df87af56af55e1da9b5290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore

const db = getFirestore(app)

//init authentication

const auth = getAuth(app)

export { db, auth }