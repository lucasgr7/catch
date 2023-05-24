import {  useDocument, useFirestore } from 'vuefire'
import { doc } from 'firebase/firestore'

export function useGame(gameId: string) {
  const db = useFirestore();
  const game = useDocument(doc(db, 'games', gameId))
  const playerUUID = localStorage.getItem('playerUUID');

  // validations
  if(!playerUUID){
    throw new Error('Player UUID not found');
  }

  

  // watch(myGame, (game: any, old: any) => {
  //   alert('games changed' + game.players.length)
  // })


  return {
    game
  };
}