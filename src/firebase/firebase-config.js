import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv6lbdye9FJElUVYuN6gResvNyAH2vAB0",
  authDomain: "interactive-map-864b5.firebaseapp.com",
  projectId: "interactive-map-864b5",
  storageBucket: "interactive-map-864b5.appspot.com",
  messagingSenderId: "997715855251",
  appId: "1:997715855251:web:8c43d67b4e00e755224a66"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {
  db,
  firebase
}