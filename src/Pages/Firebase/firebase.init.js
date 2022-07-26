// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiU7O1MQvRWtADpMLkC-etqz22SRqc5Lc",
    authDomain: "shortleave-940b4.firebaseapp.com",
    projectId: "shortleave-940b4",
    storageBucket: "shortleave-940b4.appspot.com",
    messagingSenderId: "661081084503",
    appId: "1:661081084503:web:05361b99c88f677c344912",
    measurementId: "G-C76KW623W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;