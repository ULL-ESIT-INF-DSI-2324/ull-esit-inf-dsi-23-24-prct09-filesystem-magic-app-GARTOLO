import chalk from "chalk";
import { dir } from "../magic-app.js";
import fs from "fs";

/**
 * Remove a card from the collection
 * @param id of the card to remove
 * @param user name of the user
 */
export function removeCard(id: number, user: string) {
  const userDir = `${dir}/${user}`;
  // Check if the user directory exists
  if (!fs.existsSync(userDir)) {
    console.error(chalk.red.bold("User does not exist"));
    process.exit(1);
  }

  // Check if the card exists
  if (!fs.existsSync(`./${userDir}/${id}.json`)) {
    console.error(chalk.red.bold("Card does not exist"));
    process.exit(1);
  }

  // Remove the card file
  fs.unlinkSync(`./${userDir}/${id}.json`);

  console.log(chalk.green("Card removed from the", user, "collection."));
}
