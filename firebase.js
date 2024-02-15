import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdORcnAqjA99LFdLwYyLkFA4eRZG5pYRw",
  authDomain: "react-notes-app-b6939.firebaseapp.com",
  projectId: "react-notes-app-b6939",
  storageBucket: "react-notes-app-b6939.appspot.com",
  messagingSenderId: "445463703310",
  appId: "1:445463703310:web:141c1b838b81d91b6bf15f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
