// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASAhlJuPOozY_Oo6YpWvrByl9DMANW1A0",
    authDomain: "task-manager-34541.firebaseapp.com",
    projectId: "task-manager-34541",
    storageBucket: "task-manager-34541.appspot.com",
    messagingSenderId: "994572515912",
    appId: "1:994572515912:web:cb2ef83ea76030c65a767d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export {app, auth};