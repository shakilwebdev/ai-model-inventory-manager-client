// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Vy1g-B9jMe4VFnv8Oj_WJl-UsZmhK2A",
  authDomain: "ai-model-8601b.firebaseapp.com",
  projectId: "ai-model-8601b",
  storageBucket: "ai-model-8601b.firebasestorage.app",
  messagingSenderId: "264436805663",
  appId: "1:264436805663:web:59755398cc2acd764a652a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
