import { db } from "api/firebase";
import {
  collection,
  doc,
  getCountFromServer,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export const postCounter = async () => {
  const docRef = doc(collection(db, "access"));
  await setDoc(docRef, { timestamp: serverTimestamp() });
};

export const getAccessCount = async () => {
  const coll = collection(db, "access");
  const snapshot = await getCountFromServer(coll);
  return snapshot.data().count;
};
