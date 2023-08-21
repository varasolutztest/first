import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // 
  apiKey: "AIzaSyAJiqqoTJGWwSRBJFzOpoq3rMKSXod9dtE",
  authDomain: "first-4e6e1.firebaseapp.com",
  projectId: "first-4e6e1",
  storageBucket: "first-4e6e1.appspot.com",
  messagingSenderId: "255732811220",
  appId: "1:255732811220:web:5ba8e3466692f131704241",
  measurementId: "G-50J0DMD2F3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
