import firebase from "firebase/app";
import "firebase/firebase";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("i94BGM9z47ADeLrt8QkE")
  .collection("cartItems")
  .doc("CikhOuMbj9kUyu6gBp4W");

firestore.doc("/users/94BGM9z47ADeLrt8QkE/cartItems/CikhOuMbj9kUyu6gBp4W");

firestore.collection("/users/94BGM9z47ADeLrt8QkE/cartItems");
