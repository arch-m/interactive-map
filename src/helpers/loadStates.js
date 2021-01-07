import { db } from "../firebase/firebase-config";

export const loadStates = async () => {
  const statesSnap = await db.collection('states').get();
  const states = statesSnap.docs.map(snapChild => 
    ({
      id: snapChild.data().key,
      d: snapChild.data().d,
      name: snapChild.data().name,
      description: snapChild.data().description
    })
  );

  return states;
}
