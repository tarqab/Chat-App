// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2kaUSgjK0fJlwwBftcr-gYXJeY3NW9nE",
    authDomain: "chat-app-69439.firebaseapp.com",
    projectId: "chat-app-69439",
    storageBucket: "chat-app-69439.appspot.com",
    messagingSenderId: "685497423163",
    appId: "1:685497423163:web:2180cb1a36e99a991c931e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
