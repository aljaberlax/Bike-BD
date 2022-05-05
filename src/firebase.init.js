// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXrddGfpVZeEf4HkvPC9ggj8-ff6wnXjM",
    authDomain: "bike-bd-154c6.firebaseapp.com",
    projectId: "bike-bd-154c6",
    storageBucket: "bike-bd-154c6.appspot.com",
    messagingSenderId: "441612521724",
    appId: "1:441612521724:web:1a905a667a4d497e484779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
