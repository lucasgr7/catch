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

const ScientistsCards = {
  Radar: {
    id: CardsIdentification.Radar,
    title: "Radar",
    description: "Filtre 50% do mapa por uma habilidade de uma classe",
    class: Classes.Scientist,
    level: 1,
    castTime: 15,
    cooldownTime: 30,
  },
  Hackear: {
    id: CardsIdentification.Hackear,
    title: "Hackear",
    description: "Desabilite os comandos de outro jogador por 60 segundos",
    class: Classes.Scientist,
    level: 2,
    castTime: 30,
    cooldownTime: 60,
  },
  Satelite: {
    id: CardsIdentification.Satelite,
    title: "Satélite",
    description: "Revele a localização de todos os jogadores por 30 segundos",
    class: Classes.Scientist,
    level: 3,
    castTime: 0,
    cooldownTime: 60,
  },
};

const PhilosoferCards = {
  Desinfluenciar: {
    id: CardsIdentification.Desinfluenciar,
    title: "Desinfluenciar",
    description: "Recupere um estado que esteja influenciado",
    requirements: "Ter 3 jogadores no estado influenciado",
    class: Classes.Philosofer,
    level: 1,
    castTime: 15,
    cooldownTime: 15,
  },
  Blindar: {
    id: CardsIdentification.Blindar,
    title: "Blindar",
    description: "Imunize um estado de ser influenciado por 120 segundos",
    class: Classes.Philosofer,
    level: 2,
    castTime: 30,
    cooldownTime: 120,
  },
  Motivar: {
    id: CardsIdentification.Motivar,
    title: "Motivar",
    description:
      "Realize todos os aliados terminarem suas ações instantaneamente",
    class: Classes.Philosofer,
    level: 3,
    castTime: 0,
    cooldownTime: 300,
  },
};

const MilitarCards = {
  Aeroporto: {
    id: CardsIdentification.Aeroporto,
    title: "Aeroporto",
    description:
      "Habilite o estado atual, para todos os jogadores, de se moverem para qualquer lugar do mapa, estando no estado atual",
    class: Classes.Militar,
    level: 1,
    castTime: 30,
    cooldownTime: 0,
  },
  JatoParticular: {
    id: CardsIdentification.JatoParticular,
    title: "Jato Particular",
    description: "Teleportese para qualquer lugar do mapa",
    class: Classes.Militar,
    level: 2,
    castTime: 20,
    cooldownTime: 60,
  },
  Invasao: {
    id: CardsIdentification.Invasao,
    title: "Invasão",
    description: "Influencie um estado de um jogador",
    requirements: "Ter 3 jogadores no estado atual",
    class: Classes.Militar,
    level: 3,
    castTime: 15,
    cooldownTime: 30,
  },
};

export const HeroPowerUpCards = {
  ...ScientistsCards,
  ...PhilosoferCards,
  ...MilitarCards,
};
