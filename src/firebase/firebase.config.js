// Do not push firebase config to repository
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmncPVMqB1OxG0dBnA0gwvXFOZSc8ru9M",
  authDomain: "fir-authentication-c8010.firebaseapp.com",
  projectId: "fir-authentication-c8010",
  storageBucket: "fir-authentication-c8010.firebasestorage.app",
  messagingSenderId: "172605562519",
  appId: "1:172605562519:web:1262a39e7a34df1ba053d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
