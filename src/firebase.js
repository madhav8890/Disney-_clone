// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDZ7mDmEPvYzDmGCIQ21hSiiRNk73endqU",
    authDomain: "disney-streaming.firebaseapp.com",
    projectId: "disney-streaming",
    storageBucket: "disney-streaming.appspot.com",
    messagingSenderId: "661861420987",
    appId: "1:661861420987:web:c301b3ecaf8f21dec13e9e",
    measurementId: "G-LNZ7Q3GGPE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;  
