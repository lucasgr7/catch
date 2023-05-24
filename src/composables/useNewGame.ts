import { collection, addDoc, getDocs } from "firebase/firestore";
import { Game } from "../constant/interfaces";
import { useCollection, useFirestore } from "vuefire";

export default function useNewGame() {
  const db = useFirestore();

  // create a new document and return the id
  async function create(nameGame: string) {
    const game = {
      players: [],
      states: [],
      map: 'usa',
      name: nameGame
    } as Game;

    try {
      const gamesRef = collection(db, 'games'); // Reference to the 'games' collection
      const docRef = await addDoc(gamesRef, game); // Create a new document with the game data and get the generated document reference

      // store in localStorage the gameId
      localStorage.setItem('gameId', docRef.id);

      return docRef.id; // Return the newly created document ID
    } catch (error) {
      console.error("Error creating new game:", error);
    }
  }

  // get all games in the collection
  async function getGames() {
    try {
      const gamesRef = collection(db, 'games'); // Reference to the 'games' collection
      const querySnapshot = await getDocs(gamesRef); // Retrieve all documents in the collection
      const games = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        name: doc.data().name
      })) as any[]; // Map the document data to the Game interface

      console.log('available games', games);
      return games;
    } catch (error) {
      console.error("Error getting games:", error);
    }
  }


  return { create, getGames };
}