export enum CardColour {
  White = "White",
  Blue = "Blue",
  Black = "Black",
  Red = "Red",
  Green = "Green",
  Colourless = "Colourless",
  MultiColour = "MultiColour",
}

export enum CardRarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Mythic = "Mythic",
}

export enum CardType {
  Creature = "Creature",
  Planeswalker = "Planeswalker",
  Enchantment = "Enchantment",
  Instant = "Instant",
  Sorcery = "Sorcery",
  Artifact = "Artifact",
  Land = "Land",
}

/**
 * @interface ICard - Interface for Magic card
 */
export interface ICardBase {
  id: number;
  name: string;
  manaCost: number;
  colour: CardColour;
  type: CardType;
  rarity: CardRarity;
  text: string;
  value: number;
}

export interface ICreatureCard extends ICardBase {
  type: CardType.Creature;
  strength: number;
  resistance: number;
}

export interface IPlaneswalkerCard extends ICardBase {
  type: CardType.Planeswalker;
  loyalty: number;
}

export type ICard = ICreatureCard | IPlaneswalkerCard | ICardBase;
