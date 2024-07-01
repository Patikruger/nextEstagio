import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCELNdQY88F90FJ2Y1x85EYo3feeUYkuK0",
  authDomain: "tarefasplus-976d4.firebaseapp.com",
  projectId: "tarefasplus-976d4",
  storageBucket: "tarefasplus-976d4.appspot.com",
  messagingSenderId: "435693716735",
  appId: "1:435693716735:web:2e56472ccaa17a9e01b8ca"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };