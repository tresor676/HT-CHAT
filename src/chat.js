import { db, auth } from "./firebase.js";
import {
  collection, addDoc, onSnapshot,
  query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ENVOYER MESSAGE
export async function sendMessage(conversationId, text) {
  await addDoc(
    collection(db, "messages", conversationId, "items"),
    {
      senderId: auth.currentUser.uid,
      text,
      type: "text",
      createdAt: serverTimestamp(),
      seenBy: [auth.currentUser.uid]
    }
  );
}

// ÉCOUTER MESSAGES (temps réel)
export function listenMessages(conversationId, callback) {
  const q = query(
    collection(db, "messages", conversationId, "items"),
    orderBy("createdAt")
  );

  return onSnapshot(q, snap => {
    const messages = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    callback(messages);
  });
}
