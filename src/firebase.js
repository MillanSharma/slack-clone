// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAvcOEn0q8mxILbk4KEEx8jsGpqPsuCCr4",
    authDomain: "slack-785d7.firebaseapp.com",
    projectId: "slack-785d7",
    storageBucket: "slack-785d7.appspot.com",
    messagingSenderId: "45778759658",
    appId: "1:45778759658:web:874d9393ded8d06228cc93"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db} 