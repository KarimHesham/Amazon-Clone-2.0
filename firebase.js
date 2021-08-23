import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXWPPMtemF3ROp843D64YnsnPlNibVjZU",
  authDomain: "clone2-b8ccf.firebaseapp.com",
  projectId: "clone2-b8ccf",
  storageBucket: "clone2-b8ccf.appspot.com",
  messagingSenderId: "1030852754733",
  appId: "1:1030852754733:web:253bfdfcae228f323fa7a4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
