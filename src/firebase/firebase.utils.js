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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
