import { ICard } from "../ICard.js";

/**
 * Print the card details to the console, formatted
 * @param card - The card to print
 */
export function printCard(card: ICard) {
  //TODO: Format the output
  console.log("Card ID: " + card.id);
  console.log("Name: " + card.name);
  console.log("Type: " + card.type);
  console.log("Rarity: " + card.rarity);
}
