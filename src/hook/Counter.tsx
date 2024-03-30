import { useEffect, useState } from "react";
import { db } from "api/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useCounter = (): number => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "access"), (snapshot) => {
      setCount(snapshot.docs.length);
    });
    return () => unsubscribe();
  }, []);

  return count;
};
