import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6zGBbYmrs2GEZPLxQC4mFEa5JYnRtn5g",
    authDomain: "music-list-c9ee0.firebaseapp.com",
    projectId: "music-list-c9ee0",
    storageBucket: "music-list-c9ee0.appspot.com",
    messagingSenderId: "216860189755",
    appId: "1:216860189755:web:800fc832c508d95dd6e81e"
  };

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const projectStorage = firebase.storage()

const timeStamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectAuth, projectStorage, timeStamp }