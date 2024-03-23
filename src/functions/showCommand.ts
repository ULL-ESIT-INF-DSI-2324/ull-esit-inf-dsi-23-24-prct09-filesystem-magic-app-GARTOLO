import { CommandModule } from "yargs";
import chalk from "chalk";
import { dir } from "../magic-app.js";
import fs from "fs";
import { printCard } from "./printCard.js";

/**
 * Command module to show a card in the collection
 */
export const showCommand: CommandModule = {
  command: "show",
  describe: "Show a card in the collection",
  builder: {
    user: {
      description: "User name",
      type: "string",
      demandOption: true,
    },
    id: {
      description: "Card ID",
      type: "number",
      demandOption: true,
    },
  },
  handler: (argv) => {
    console.log(
      chalk.blue("Show card with ID: " + argv.id + " for user: " + argv.user),
    );

    const userDir = `${dir}/${argv.user}`;

    // Check if the collection and card exist
    if (!fs.existsSync(userDir)) {
      console.error(chalk.red.bold("User does not exist"));
      process.exit(1);
    }
    if (!fs.existsSync(`./${userDir}/${argv.id}.json`)) {
      console.error(chalk.red.bold("Card does not exist"));
      process.exit(1);
    }

    // Get the card from the file
    const card = JSON.parse(
      fs.readFileSync(`./${userDir}/${argv.id}.json`, "utf-8"),
    );

    printCard(card);
  },
};
