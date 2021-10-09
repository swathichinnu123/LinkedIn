import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANz_D9OngLV0mcDNZH7MuN9fUha_WJM10",
    authDomain: "linkedin-clone-e4ca2.firebaseapp.com",
    projectId: "linkedin-clone-e4ca2",
    storageBucket: "linkedin-clone-e4ca2.appspot.com",
    messagingSenderId: "349589395605",
    appId: "1:349589395605:web:754d425570230b5a91639c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };