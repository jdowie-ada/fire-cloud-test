// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYBnPcQeWuIlukm_ltOC_UJxw2EEy4XEk",
  authDomain: "helloworldtutorial-51e6c.firebaseapp.com",
  projectId: "helloworldtutorial-51e6c",
  storageBucket: "helloworldtutorial-51e6c.firebasestorage.app",
  messagingSenderId: "528593068567",
  appId: "1:528593068567:web:d4b97db2c0e7aaafe5f252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);