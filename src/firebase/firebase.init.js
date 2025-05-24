// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdryKUt6Joy3Z03-tsD_QTSS286tcmK_o",
  authDomain: "plant-care-app-36ea0.firebaseapp.com",
  projectId: "plant-care-app-36ea0",
  storageBucket: "plant-care-app-36ea0.firebasestorage.app",
  messagingSenderId: "401296350164",
  appId: "1:401296350164:web:436c05530dfc87d2245441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);