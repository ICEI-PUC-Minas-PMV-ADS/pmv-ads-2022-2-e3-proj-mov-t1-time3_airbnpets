import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAf9a7iIE9zqBiBVRfjVRIGTTqOsZwbrPI",
  authDomain: "airbnpets-8969d.firebaseapp.com",
  projectId: "airbnpets-8969d",
  storageBucket: "airbnpets-8969d.appspot.com",
  messagingSenderId: "759357405121",
  appId: "1:759357405121:web:e393b6c2d029257448e140",
});

const db = firebase.firestore();

export {db};