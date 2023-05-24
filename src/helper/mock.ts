// import usaMap from '../assets/usaMap.json';
import { Classes, Game, MapState, Player, State } from "../constant/interfaces";
import usaMap from "../constant/usaMap.json";

export default class Mock {
  generateMapState(): MapState[] {
    return usaMap.states.map((state: State) => {
      return {
        id: state.id,
        name: state.name,
        neighbors: state.neighbors,
        players: [],
        condition: null,
        powerUps: null,
      } as MapState;
    });
  }

  generatePlayers(): Player[] {
    return [
      {
        id: "3e00e8ed-9e4c-4f25-a77d-12919580dae3",
        name: "Player 1",
        class: Classes.Villain,
        cards: [],
        level: 1,
      },
      {
        id: "2",
        name: "Player 2",
        class: Classes.Militar,
        cards: [],
        level: 1,
      },
      {
        id: "3",
        name: "Player 3",
        class: Classes.Philosofer,
        cards: [],
        level: 1,
      },
      {
        id: "4",
        name: "Player 4",
        class: Classes.Scientist,
        cards: [],
        level: 1,
      },
      {
        id: "5",
        name: "Player 5",
        class: Classes.Militar,
        cards: [],
        level: 1,
      },
      {
        id: "6",
        name: "Player 6",
        class: Classes.Philosofer,
        cards: [],
        level: 1,
      },
    ] as Player[];
  }

  generateGame(): Game {
    return {
      id: 1,
      players: this.generatePlayers(),
      states: this.generateMapState(),
    } as Game;
  }
}
