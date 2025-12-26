import { db, auth } from "./firebase.js";
import {
  doc, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export function setupPresence() {
  const userRef = doc(db, "users", auth.currentUser.uid);

  updateDoc(userRef, { online: true });

  window.addEventListener("beforeunload", () => {
    updateDoc(userRef, {
      online: false,
      lastSeen: serverTimestamp()
    });
  });
}
