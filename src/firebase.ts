// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxHwyJLR6lk4hh7-H_VDXCvoYzQp3-NFc",
    authDomain: "to-do-app-d69e6.firebaseapp.com",
    projectId: "to-do-app-d69e6",
    storageBucket: "to-do-app-d69e6.appspot.com",
    messagingSenderId: "117872533458",
    appId: "1:117872533458:web:5ba42f570074cab9a0b20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};