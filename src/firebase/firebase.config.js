// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm8D2GNDkf7g4ynXGTBlsp1fbl13KZ7Ww",
  authDomain: "coffee-client-86be4.firebaseapp.com",
  projectId: "coffee-client-86be4",
  storageBucket: "coffee-client-86be4.appspot.com",
  messagingSenderId: "813526367722",
  appId: "1:813526367722:web:157c210bee20e5cc468693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 