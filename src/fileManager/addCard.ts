import chalk from "chalk";
import { ICard } from "../ICard.js";
import { dir } from "../magic-app.js";
import fs from 'fs';

/**
 * Add a new card to the collection
 * @param card to add
 * @param user name of the user
 */
export function addCard(card: ICard, user: string) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  // Check if the collection file exists
  if (!fs.existsSync(`./${dir}/${user}-collection.json`)) {
    fs.writeFileSync(`./${dir}/${user}-collection.json`, '[]');
  }

  // Read the collection from the file
  const collection = JSON.parse(fs.readFileSync(`./${dir}/${user}-collection.json`, 'utf-8'));

  // Check if the card already exists
  if (collection.find((c: ICard) => c.id === card.id)) {
    console.error(chalk.red.bold("Card already exists in the collection"));
    process.exit(1);
  }

  // Add the card to the collection
  collection.push(card);

  // Write the collection back to the file
  fs.writeFileSync(`./${dir}/${user}-collection.json`, JSON.stringify(collection, null, 2));

  console.log("Card added to the", user, "collection.");
}
