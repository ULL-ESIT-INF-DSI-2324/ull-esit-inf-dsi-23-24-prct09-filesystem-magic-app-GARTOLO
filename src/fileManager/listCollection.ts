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
  // Check if the collection file exists
  if (!fs.existsSync(`./${dir}/${user}-collection.json`)) {
    console.error(chalk.red.bold("Collection not found"));
    process.exit(1);
  }

  // Read the collection from the file
  const collection = JSON.parse(
    fs.readFileSync(`./${dir}/${user}-collection.json`, "utf-8"),
  );

  // Print the collection
  console.log(chalk.green.bold("Collection for", user));

  if (collection.length === 0) {
    console.log(chalk.yellow.bold("No cards in the collection"));
    return;
  }

  collection.forEach((card: ICard) => {
    printCard(card);
    console.log();
  });
}
