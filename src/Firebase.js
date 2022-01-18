import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJb5sCQ6RB35SMS4oJqjD5fM520xGsdI4",
  authDomain: "user-info-anish.firebaseapp.com",
  projectId: "user-info-anish",
  storageBucket: "user-info-anish.appspot.com",
  messagingSenderId: "359319471384",
  appId: "1:359319471384:web:a7b636f23d032c938a8a6d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);