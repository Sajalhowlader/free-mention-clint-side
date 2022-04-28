// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh2zD6DnQjbmVf2FACe6AmQrYZ_QM-c30",
    authDomain: "free-mention.firebaseapp.com",
    projectId: "free-mention",
    storageBucket: "free-mention.appspot.com",
    messagingSenderId: "829275233555",
    appId: "1:829275233555:web:2952cf6c863ed417e30ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;