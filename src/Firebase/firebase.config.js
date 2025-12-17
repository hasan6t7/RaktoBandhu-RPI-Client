import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBM4TgMCnDq__c8Z60Fcam2SOFHxtp8vF0",
  authDomain: "rakto-bondhu.firebaseapp.com",
  projectId: "rakto-bondhu",
  storageBucket: "rakto-bondhu.firebasestorage.app",
  messagingSenderId: "36307718018",
  appId: "1:36307718018:web:6f035f3da6e87379a8099b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();