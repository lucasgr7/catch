import { ref, watch } from "vue";
import { useCollection, useDocument, useFirestore } from 'vuefire'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import Mock from "../helper/mock";
import { Player } from "../constant/interfaces";

export function useGameCollection() {
  const db = useFirestore();
  const games = useCollection(collection(db, 'games'));
  const myGame = ref();
  const playerUUID = localStorage.getItem('playerUUID');

  // validations
  if(!playerUUID){
    throw new Error('Player UUID not found');
  }

  const addGame = async () => {
    await addDoc(collection(db, 'games'), {
      name: 'New Game',
      description: 'This is a new game',
    })
  };

  const addPlayerGame = async (gameId: string, player: string) => {
    const game = games.value.find(game => game.id === gameId);
    if (game) {
      game.players.push(player);
      // update Firestore
      const gameRef = doc(db, 'games', gameId);
      await updateDoc(gameRef, { players: game.players });
    }
  };

  const getGame = (gameId?: string) => {
    if(myGame.value) return myGame;
    
    // mock
    if(import.meta.env.VITE_APP_MODE === 'debug'){
      const newGame = new Mock();
      myGame.value = newGame.generateGame();
    }else{
      myGame.value = games.value.find(game => game.id === gameId);
    }
    return myGame;
  }

  const getMyPlayer = (): Player => {
    const game = getGame();
    const myPlayer = game.value?.players.find((player: any) => player.id === playerUUID);
    return myPlayer;
  }

  // watch(myGame, (game: any, old: any) => {
  //   alert('games changed' + game.players.length)
  // })


  return {
    games,
    addGame,
    getGame,
    addPlayerGame,
    getMyPlayer
  };
}