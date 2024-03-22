import { CommandModule } from "yargs";
import { ICard } from "../ICard.js";
import { createICard } from "./createICard.js";
import chalk from "chalk";
import { addCard } from "../fileManager/addCard.js";

/**
 * Command to add a new card to the collection
 */
export const addCommand: CommandModule = {
  command: "add",
  describe: "Add a new card to the collection",
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
    name: {
      description: "Card name",
      type: "string",
      demandOption: true,
    },
    mana_cost: {
      description: "Mana cost",
      type: "number",
      demandOption: true,
    },
    colour: {
      description: "Card colour",
      type: "string",
      demandOption: true,
    },
    type: {
      description: "Card type",
      type: "string",
      demandOption: true,
    },
    rarity: {
      description: "Card rarity",
      type: "string",
      demandOption: true,
    },
    text: {
      description: "Card text",
      type: "string",
      demandOption: true,
    },
    value: {
      description: "Card value",
      type: "number",
      demandOption: true,
    },
    resistance: {
      description: "Card resistance",
      type: "number",
      demandOption: false,
    },
    strength: {
      description: "Card strength",
      type: "number",
      demandOption: false,
    },
    loyalty: {
      description: "Card loyalty",
      type: "number",
      demandOption: false,
    },
  },
  handler: (argv) => {
    console.log(
      chalk.blue("Adding card with ID: " + argv.id + " for user: " + argv.user),
    );

    if (argv.type === "Creature" || argv.type === "creature") {
      // Make sure strength and resistance are provided
      if (argv.strength === undefined || argv.resistance === undefined) {
        console.error(
          chalk.red.bold("Creature card must have strength and resistance"),
        );
        process.exit(1);
      }

      // Create a creature card
      let card: ICard;
      try {
        card = createICard(
          Number(argv.id),
          String(argv.name),
          Number(argv.mana_cost),
          String(argv.colour),
          String(argv.type),
          String(argv.rarity),
          String(argv.text),
          Number(argv.value),
          Number(argv.strength),
          Number(argv.resistance),
        );
      } catch (error) {
        if (error instanceof Error)
          console.error(chalk.red.bold("Error:", error.message));
        process.exit(1);
      }

      // Add card to the collection (json file with the fs sincronous api)
      addCard(card, String(argv.user));
    } else if (argv.type === "Planeswalker" || argv.type === "planeswalker") {
      // Make sure loyalty is provided
      if (argv.loyalty === undefined) {
        console.error(chalk.red.bold("Planeswalker card must have loyalty"));
        process.exit(1);
      }

      // TODO
    } else {
      // TODO
      console.log("Adding normal card");
    }
  },
};
