// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs1hvlWL0cwSYW0t6yvyeXQQT0UxzvdQs",
  authDomain: "fitness-website-4c1d4.firebaseapp.com",
  projectId: "fitness-website-4c1d4",
  storageBucket: "fitness-website-4c1d4.appspot.com",
  messagingSenderId: "539527099472",
  appId: "1:539527099472:web:5abc1efab874d0b92f0d55",
  measurementId: "G-CQXXZKSQEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);