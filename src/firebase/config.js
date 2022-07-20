import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeVPzd38fccEidPKb0nspb_BmVrj9QS8k",
    authDomain: "budget-mate.firebaseapp.com",
    projectId: "budget-mate",
    storageBucket: "budget-mate.appspot.com",
    messagingSenderId: "722000171185",
    appId: "1:722000171185:web:df87af56af55e1da9b5290"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

//initializing services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//export services

export { projectFirestore, projectAuth }