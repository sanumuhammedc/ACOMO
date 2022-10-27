// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl8xqf7tXozvUPpzU3mlDXzaocyuj5yF4",
  authDomain: "acomo-1f89d.firebaseapp.com",
  projectId: "acomo-1f89d",
  storageBucket: "acomo-1f89d.appspot.com",
  messagingSenderId: "556959235470",
  appId: "1:556959235470:web:57a92d6bac7eb81c3938df",
  measurementId: "G-037BMCGV04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);