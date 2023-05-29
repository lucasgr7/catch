import { _ } from 'lodash';
import { Classes } from '../constant/interfaces';
import mapUsa from '../constant/usaMap.json';

export default function useAmericaMap() {
  function createPlayerPlacement(numberOfPlayers: number){
    mapUsa.states.sort(() => Math.random() - 0.5);
    return mapUsa.states.slice(0, numberOfPlayers).map(state => state.id);
  }

  function createCardsPlacement(){
    // should randomply place a card in each state
    const cards = [Classes.Militar, Classes.Philosofer, Classes.Scientist];
    // multiply the elements by three
    cards.push(...cards);
    cards.push(...cards);
    const states = _.clone(mapUsa.states);

    states.sort(() => Math.random() - 0.5);
    const sates = states.splice(0, 9);
    return sates.map((state: any, index) => {
      return {
        id: state.id,
        type: cards[index]
      }
    })
  }

  return { createPlayerPlacement, createCardsPlacement}
}