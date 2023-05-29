import { describe, test, vi, expect } from 'vitest'
import useAmericaMap from '../useAmericaMap';
import { Classes } from '../../constant/interfaces';

describe('useNewGame', () => {
  test('createPlayerPlacement', () => {

    const { createPlayerPlacement } = useAmericaMap();
    const playerPlacement = createPlayerPlacement(6);
    expect(playerPlacement).toHaveLength(6);
    console.log(playerPlacement);
  });

  test('createPlayerPlacement', () => {
    const{ createCardsPlacement} = useAmericaMap();
    const cardsPlacement = createCardsPlacement();
    console.log(cardsPlacement);
    expect(cardsPlacement).toHaveLength(9);

    // expect to have all classes type as atribute type, should ignore the value of id
    cardsPlacement.forEach((card: {type: string, id: string}) => {
      expect([Classes.Militar, Classes.Philosofer, Classes.Scientist]).toContain(card.type)
      expect([Classes.Villain]).not.toContain(card.type)
    })
  })

  // test 1000x possibilites should none be equal
  test('createCardsPlacement test 100x', () => {
    const { createCardsPlacement } = useAmericaMap();
    const results = [] as any[];

    for(let i = 0; i < 100; i++){
      const result = createCardsPlacement();
      results.push(result);
      expect(result).toHaveLength(9);
    }

    for(let i = 0; i < 100; i++){
      for(let j = 0; j < 100; j++){
        if(i !== j){
          expect(results[i]).not.toEqual(results[j]);
        }
      }
    }
  })
})