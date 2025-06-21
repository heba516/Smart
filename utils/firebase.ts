// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA39PKPahw3obB-vYbwuenYtlo1Cu8E5sE",
  authDomain: "esp-cam-response.firebaseapp.com",
  databaseURL: "https://esp-cam-response-default-rtdb.firebaseio.com",
  projectId: "esp-cam-response",
  storageBucket: "esp-cam-response.firebasestorage.app",
  messagingSenderId: "1024259091134",
  appId: "1:1024259091134:web:a84b9963c93cce3f3b8cef",
  measurementId: "G-1SF3MVB98Y"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };