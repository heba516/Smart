import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };