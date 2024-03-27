// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-eqtI1xdyVKgZIDm6bOe4FgIcJcOjLjo",
  authDomain: "portfolio-gomashiokinako.firebaseapp.com",
  projectId: "portfolio-gomashiokinako",
  storageBucket: "portfolio-gomashiokinako.appspot.com",
  messagingSenderId: "42862717124",
  appId: "1:42862717124:web:529d01757c17db673a8191",
  measurementId: "G-TP4N45EKNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, "notification_received");
