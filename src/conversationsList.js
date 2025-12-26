import { db, auth } from "./firebase.js";
import {
  collection, query, where, onSnapshot, orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export function listenConversations(callback) {
  const q = query(
    collection(db, "conversations"),
    where("members", "array-contains", auth.currentUser.uid),
    orderBy("updatedAt", "desc")
  );

  return onSnapshot(q, snap => {
    const list = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    callback(list);
  });
}
