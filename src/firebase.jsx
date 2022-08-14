// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYsATIR3Br42UEi9XWIN6R0OORITCl6zo",
    authDomain: "cargon-medchant.firebaseapp.com",
    projectId: "cargon-medchant",
    storageBucket: "cargon-medchant.appspot.com",
    messagingSenderId: "238054044650",
    appId: "1:238054044650:web:267b0827f423783ac53893",
    measurementId: "G-QS5P61CC6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app