import fs from 'fs';
import { dir } from '../magic-app.js';
import { ICard } from '../ICard.js';
import chalk from "chalk";

/**
 * Update a card in the collection
 * @param card object to update (with their ID)
 * @param user name of the user
 */
export function updateCard(card: ICard, user: string) {
  console.log("Update card with ID: " + card.id + " for user: " + user);
  
  // Check if the collection file exists
  if (!fs.existsSync(`./${dir}/${user}-collection.json`)) {
    console.error(chalk.red.bold("Collection file does not exist. User must add a card first."));
    process.exit(1);
  }

  // Load the collection file
  let collection = JSON.parse(fs.readFileSync(`./${dir}/${user}-collection.json`, 'utf-8'));

  // Check if the card id exists in the collection
  if (!collection.cards.find((c: ICard) => c.id === card.id)) {
    console.error(chalk.red.bold("Card does not exist in the collection"));
    process.exit(1);
  } 

  // Update the card in the collection
  collection = collection.map((c: ICard) => {
    if (c.id === card.id) {
      return card;
    } else {
      return c;
    }
  });

  // Save the collection file
  fs.writeFileSync(`./${dir}/${user}-collection.json`, JSON.stringify(collection, null, 2));
}