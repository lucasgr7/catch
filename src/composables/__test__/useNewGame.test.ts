import { describe, test, vi, expect } from 'vitest'
import useNewGame from '../useNewGame'
import { Classes } from '../../constant/interfaces';

describe('useNewGame', () => {
  test('createRandomClassOrder returns an array of classes in random order', () => {
    // Create a component with the useNewGame composable
    const { createRandomClassOrder } = useNewGame(null);
    const randomClassOrder = createRandomClassOrder(6);
    expect(randomClassOrder).toHaveLength(6);
    // expect to contain Villain
    expect(randomClassOrder).toContain(Classes.Villain);
  });

  // test 10 random classes, should be equally random the distribution of classes
  test('createRandomClassOrder returns an array of classes in random order', () => {
    // Create a component with the useNewGame composable
    const { createRandomClassOrder } = useNewGame(null);
    const randomClassOrder = createRandomClassOrder(10);
    expect(randomClassOrder).toHaveLength(10);
    // expect to have all classes type
    expect(randomClassOrder).toContain(Classes.Villain);
    expect(randomClassOrder).toContain(Classes.Militar);
    expect(randomClassOrder).toContain(Classes.Philosofer);
    expect(randomClassOrder).toContain(Classes.Scientist);
  });

  // generate 1000 times random class order and check if the distribution is equal
  test('test 1000x scenarios', () => {
    // Create a component with the useNewGame composable
    const { createRandomClassOrder } = useNewGame(null);
    for(let i = 0; i < 1000; i++){
      const randomClassOrder = createRandomClassOrder(6);
      expect(randomClassOrder).toHaveLength(6);
      // expect to have all classes type
      expect(randomClassOrder).toContain(Classes.Villain);
      expect(randomClassOrder).toContain(Classes.Militar);
      expect(randomClassOrder).toContain(Classes.Philosofer);
      expect(randomClassOrder).toContain(Classes.Scientist);
    }
  });
})