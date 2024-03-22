import chalk from "chalk";
import { ICard } from "../ICard.js";
import { dir } from "../magic-app.js";
import fs from "fs";

/**
 * Add a new card to the collection
 * @param card to add
 * @param user name of the user
 */
export function addCard(card: ICard, user: string) {
  const userDir = `${dir}/${user}`;
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir);
  }

  // Create the card file if it doesn't exist
  if (!fs.existsSync(`./${userDir}/${card.id}.json`)) {
    fs.writeFileSync(`./${userDir}/${card.id}.json`, JSON.stringify(card, null, 2));
    console.log(chalk.green.bold("Card added to the", user, "collection."));
  } else {
    console.error(chalk.red.bold("Card already exists"));
    process.exit(1);
  }
}
