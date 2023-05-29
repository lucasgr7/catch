import { useFirestore, useDocument } from 'vuefire';
import { doc } from 'firebase/firestore';

export async function useGame() {
  const db = useFirestore();

  const playerUUID = localStorage.getItem('playerUUID');
  // validations
  if (!playerUUID) {
    throw new Error('Player UUID not found');
  }

  let gameId = localStorage.getItem('gameId') as string;
  const gameRef = doc(db, 'games', gameId);
  const { data: game, error } = useDocument(gameRef);
  return { game, error };
}