import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({  
  databaseURL: "https://catch-d6c88-default-rtdb.firebaseio.com/",
  appId: "catch-d6c88",
  projectId: "catch-d6c88",
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')