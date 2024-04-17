import chalk from "chalk";
import { ICard } from "../ICard.js";
import { dir } from "../magic-app.js";
import fs from "fs";
import { printCard } from "../functions/printCard.js";

/**
 * List all cards in the collection for a user
 * @param user name of the user
 */
export function listCollection(user: string) {
  const userDir = `${dir}/${user}`;
  // Check if the user directory exists
  if (!fs.existsSync(userDir)) {
    console.error(chalk.red.bold("User does not exist"));
    process.exit(1);
  }

  // Read all files in the user directory to get the cards
  console.log(chalk.green.bold("Collection for", user));

  const files = fs.readdirSync(userDir);
  const collection: ICard[] = [];
  files.forEach((file) => {
    const card = JSON.parse(fs.readFileSync(`${userDir}/${file}`, "utf-8"));
    collection.push(card);
  });

  // Print the collection

  if (collection.length === 0) {
    console.log(chalk.yellow.bold("No cards in the collection"));
    return;
  }

  collection.forEach((card: ICard) => {
    printCard(card);
    console.log();
  });
}
