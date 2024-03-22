import chalk from "chalk";
import { ICard } from "../ICard.js";
import { dir } from "../magic-app.js";
import fs from "fs";

/**
 * Remove a card from the collection
 * @param id of the card to remove
 * @param user name of the user
 */
export function removeCard(id: number, user: string) {
  // Check if the collection file exists
  if (!fs.existsSync(`./${dir}/${user}-collection.json`)) {
    console.error(chalk.red.bold("Collection file does not exist"));
    process.exit(1);
  }

  // Read the collection from the file
  const collection = JSON.parse(
    fs.readFileSync(`./${dir}/${user}-collection.json`, "utf-8"),
  );

  // Check if the card exists
  const cardIndex = collection.findIndex((c: ICard) => c.id === id);
  if (cardIndex === -1) {
    console.error(chalk.red.bold("Card does not exist in the collection"));
    process.exit(1);
  }

  // Remove the card from the collection
  collection.splice(cardIndex, 1);

  // Write the collection back to the file
  fs.writeFileSync(
    `./${dir}/${user}-collection.json`,
    JSON.stringify(collection, null, 2),
  );

  console.log(chalk.green("Card removed from the", user, "collection."));
}
