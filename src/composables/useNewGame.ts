import { collection, addDoc, getDocs, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Classes, Game, Player, Playerstate } from "../constant/interfaces";
import { useCollection, useDocument, useFirestore } from "vuefire";

export default function useNewGame() {
  const db = useFirestore();

  // create a new array of classes in a random order and add a single Classes.Villain
  function createRandomClassOrder(numberOfPlayers: number): Classes[] {
    const classes = [Classes.Militar, Classes.Philosofer, Classes.Scientist];
    const randomClasses = [];
    for (let i = 0; i < numberOfPlayers - 1; i++) {
      const randomIndex = Math.floor(Math.random() * classes.length);
      randomClasses.push(classes[randomIndex]);
    }
    randomClasses.push(Classes.Villain);
    // randomize the array again
    randomClasses.sort(() => Math.random() - 0.5);
    return randomClasses;
  }

  // create a new document and return the id
  async function create(nameGame: string, numberOfPlayers: number) {
    const playerUUID = localStorage.getItem('playerUUID');
    if (!playerUUID) {
      throw new Error('Player UUID not found');
    }

    const game = {
      players: [],
      states: [],
      map: 'usa',
      name: nameGame,
      numberOfPlayers: numberOfPlayers,
      assingClassesByOrder: createRandomClassOrder(numberOfPlayers),
    } as Game;

    // add my player
    game.players.push({
      cards: [],
      state: Playerstate.none,
      class: game.assingClassesByOrder[0],
      id: playerUUID,
      level: 1,
      name: 'Player 1',
    } as Player);

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

  function checkMyPlayerInGame(game: Game, playerUUID: string){
    return game.players.find((player) => player.id === playerUUID);
  }
  
  async function joinGame(gameId: string, router: any){
    const gameRef = doc(collection(db, 'games'), gameId);
    const game = useDocument(gameRef);
    
    // Wait for data to be loaded
    onSnapshot(gameRef, async (doc) => {
      if (doc.exists()) {
        // If document exists, populate game
        game.value = (doc.data()) as Game;

        // At this point, game.value should not be undefined
        const playerUUID = localStorage.getItem('playerUUID');
        if (!playerUUID) {
          throw new Error('Player UUID not found');
        }
        // check if my player is already in the game
        if(checkMyPlayerInGame(game.value, playerUUID)) {
          router.push({ name: 'game', params: { id: gameId } });
          return;
        };
      
        game?.value?.players.push({
          cards: [],
          state: Playerstate.none,
          class: game.value.assingClassesByOrder[game.value.players.length],
          id: playerUUID,
          level: 1,
          name: `Player ${game.value.players.length + 1}`,
        } as Player);
      
        // Save the updated game document
        await updateDoc(gameRef, game.value);
      
        localStorage.setItem('gameId', gameId);
        router.push({ name: 'game', params: { id: gameId } });
      } else {
        // If document doesn't exist, throw an error
        throw new Error('Game not found');
      }
    });
  
  }


  return { create, getGames, joinGame };
}