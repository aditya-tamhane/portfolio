import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCq-jvofGhJBXjTo0spX5pFy0KQGO6STy0",
  authDomain: "portfolio-react-dashboard.firebaseapp.com",
  projectId: "portfolio-react-dashboard",
  storageBucket: "portfolio-react-dashboard.appspot.com",
  messagingSenderId: "355594313889",
  appId: "1:355594313889:web:990ec8eb7fedec2e3f50e0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);