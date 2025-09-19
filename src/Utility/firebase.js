// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // v9 Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ4TpMZhCaqsqw_Oz20fa08LNX4F7PmLc",
  authDomain: "e-clone-491fc.firebaseapp.com",
  projectId: "e-clone-491fc",
  storageBucket: "e-clone-491fc.appspot.com", // 👈 small fix here too
  messagingSenderId: "582300307333",
  appId: "1:582300307333:web:ab23430eb199182e3d3eec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth & firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
