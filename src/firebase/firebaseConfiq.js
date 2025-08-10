// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjoif-ZAVGMfKCwbDO_n3yzqnur5JH1lU",
  authDomain: "web-project-15.firebaseapp.com",
  projectId: "web-project-15",
  storageBucket: "web-project-15.firebasestorage.app",
  messagingSenderId: "996720547018",
  appId: "1:996720547018:web:2aa06cab3dc35448fed033",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
