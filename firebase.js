import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2WG-135oKY_s6xf5-nBBhxncNV9UayQ0",
  authDomain: "tresor-ae58e.firebaseapp.com",
  projectId: "tresor-ae58e",
  storageBucket: "tresor-ae58e.firebasestorage.app",
  messagingSenderId: "835562519447",
  appId: "1:835562519447:web:e4032e73f7601ba3c522d2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
