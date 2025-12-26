import { db } from "./firebase.js";
import {
  doc, getDoc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function getOrCreatePrivateConversation(uid1, uid2) {
  const conversationId = [uid1, uid2].sort().join("_");
  const ref = doc(db, "conversations", conversationId);

  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      type: "private",
      members: [uid1, uid2],
      lastMessage: "",
      updatedAt: serverTimestamp()
    });
  }
  return conversationId;
}
