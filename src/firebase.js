import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJsWByDTyJkw3uwjKcX-9XYIOeyEThFQc",
  authDomain: "chat-app-70c01.firebaseapp.com",
  projectId: "chat-app-70c01",
  storageBucket: "chat-app-70c01.appspot.com",
  messagingSenderId: "216782498246",
  appId: "1:216782498246:web:4b774c0ddd385f7260aac7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);