import firebase from firebase
import "firebase/storage"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoi0u5ofcZZ88hhd4xlt4YusQQVFEJ70Y",
  authDomain: "new-project-4f29b.firebaseapp.com",
  projectId: "new-project-4f29b",
  storageBucket: "new-project-4f29b.appspot.com",
  messagingSenderId: "186912655926",
  appId: "1:186912655926:web:81a669d34dbbe6b1bde697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database