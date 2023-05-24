import { useFirestore, useDocument } from 'vuefire';
import { doc } from 'firebase/firestore';

export function useGame() {
  const db = useFirestore();

  const playerUUID = localStorage.getItem('playerUUID');
  // validations
  if (!playerUUID) {
    throw new Error('Player UUID not found');
  }

  const getGame = async () => {
    let gameId = localStorage.getItem('gameId') as string;
    const gameRef = doc(db, 'games', gameId);
    const { data: game, error } = await useDocument(gameRef);
    return { game, error };
  }


  return {
    getGame
  };
}