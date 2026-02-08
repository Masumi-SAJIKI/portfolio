import { db } from "api/firebase";
import {
  collection,
  doc,
  getCountFromServer,
  QueryDocumentSnapshot,
  serverTimestamp,
  setDoc,
  SnapshotOptions,
} from "firebase/firestore";
import { Author } from "types";

export const postCounter = async () => {
  const docRef = doc(collection(db, "access"));
  await setDoc(docRef, {
    userAgent: window.navigator.userAgent,
    timestamp: serverTimestamp(),
  });
};

export const getAccessCount = async () => {
  const coll = collection(db, "access");
  const snapshot = await getCountFromServer(coll);
  return snapshot.data().count;
};

export const getInformation = async () => {
  const docSnap = db
    .collection("information")
    .withConverter({
      toFirestore(author: Author) {
        return { ...author };
      },
      fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
      ): Author {
        const data = snapshot.data(options)!;
        return {
          name: data.name,
          handle_name: data.handle_name,
          description: data.description,
        };
      },
    })
    .doc("author")
    .get();
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
