import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABUeGVzqQrlVBlesn9gQmlaH7Gx75KoZQ",
  authDomain: "crw-clothing-c456c.firebaseapp.com",
  databaseURL: "https://crw-clothing-c456c.firebaseio.com",
  projectId: "crw-clothing-c456c",
  storageBucket: "crw-clothing-c456c.appspot.com",
  messagingSenderId: "691011833763",
  appId: "1:691011833763:web:0292539c57988b04119416",
  measurementId: "G-TY6G2PVNJL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
