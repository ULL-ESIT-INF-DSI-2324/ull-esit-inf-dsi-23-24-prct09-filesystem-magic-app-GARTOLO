import fs from "fs";
import { dir } from "../magic-app.js";
import { ICard } from "../ICard.js";
import chalk from "chalk";

/**
 * Update a card in the collection
 * @param card object to update (with their ID)
 * @param user name of the user
 */
export function updateCard(card: ICard, user: string) {
  const userDir = `${dir}/${user}`;
  // Check if the card file exists
  if (!fs.existsSync(`./${userDir}/${card.id}.json`)) {
    console.error(
      chalk.red.bold(
        "Collection file does not exist. User must add a card first.",
      ),
    );
    process.exit(1);
  }

  // Update the card in the file
  fs.writeFileSync(
    `./${userDir}/${card.id}.json`,
    JSON.stringify(card, null, 2),
  );

  console.log(chalk.green.bold("Card updated in the", user, "collection."));
}
