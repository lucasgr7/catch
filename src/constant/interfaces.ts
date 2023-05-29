export interface GameInterface {
  id: string;
  name: string;
}

export interface ClassePlayer {
  id: string;
}

// enum for the classes, villain, philosofer, militar and scientist
export enum Classes {
  Villain = "Villain",
  Philosofer = "Philosofer",
  Militar = "Militar",
  Scientist = "Scientist",
}

export enum CardsIdentification {
  Radar = "Radar",
  Hackear = "Hackear",
  Satelite = "Satelite",
  Desinfluenciar = "Desinfluenciar",
  Blindar = "Blindar",
  Motivar = "Motivar",
  Aeroporto = "Aeroporto",
  JatoParticular = "JatoParticular",
  Invasao = "Invasao",
}

// enum for state of states influenced, fixed and blocked
export enum StateState {
  Influenced = "Influenced",
  Fixed = "Fixed",
  Blocked = "Blocked",
}

export enum Playerstate{
  hacked = "hacked",
  none = 'none'
}

// enum for the types of the cards
export interface Card {
  id: CardsIdentification;
  title: string;
  description: string;
  class: Classes;
  level: number;
  castTime: number;
  cooldownTime: number;
  requirements?: string;
}

export interface Player {
  id: string;
  name: string;
  class: Classes;
  cards: Card[];
  level: number;
  state?: Playerstate | null;
  currentState: string;
}

export interface State {
  id: string;
  name: string;
  neighbors: string[];
}

export interface MapState {
  id: string;
  name: string;
  neighbors: string[];
  players?: Player[];
  condition: StateState | null;
  powerUps: 'philosophy' | 'military' | 'scientist' | null;
}

export interface Game {
  map: string;
  players: Player[];
  states: MapState[];
  name: string;
  numberOfPlayers: number;
  assignClassesByOrder: Classes[];
  assignStartStates: string[];
}

export interface PlayerSessionState {
  action: 
  'move' | 'scientist-radar' | 'scientist-hacking' | 'scientist-satelite' |
  'philosofer-desinfluenciar' | 'philosofer-blindar' | 'philosofer-motivar' |
  'militar-aeroporto' | 'militar-jato-particular' | 'militar-invasao' | null;
  startTime: Date;
  endTime: Date;
}
