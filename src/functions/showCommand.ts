import {CommandModule} from "yargs";
import chalk from "chalk";
import {dir} from "../magic-app.js";
import fs from "fs";
import {printCard} from "./printCard.js";

export const showCommand: CommandModule = {
  command: 'show',
  describe: 'Show a card in the collection',
  builder: {
    user: {
      description: 'User name',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'Card ID',
      type: 'number',
      demandOption: true
    }
  },
  handler: (argv) => {
    console.log("Show card with ID: " + argv.id + " for user: " + argv.user);

    // Check if the collection and card exist
    if (!fs.existsSync(`./${dir}/${argv.user}-collection.json`)) {
      console.error(chalk.red.bold("Collection not found"));
      process.exit(1);
    }

    const collection = JSON.parse(fs.readFileSync(`./${dir}/${argv.user}-collection.json`, 'utf-8'));
    const card = collection.find((c: { id: number; }) => c.id === argv.id);

    if (!card) {
      console.error(chalk.red.bold("Card not found"));
      process.exit(1);
    }

    printCard(card);
  }
}