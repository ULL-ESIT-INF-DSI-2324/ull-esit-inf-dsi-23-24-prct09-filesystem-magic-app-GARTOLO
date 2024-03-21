import {CommandModule} from 'yargs';
import { ICard } from "../ICard.js";
import { updateCard } from '../fileManager/updateCard.js';
import chalk from 'chalk';
import { createICard } from './createICard.js';

export const updateCommand: CommandModule = {
  command: 'update',
  describe: 'Update a card in the collection',
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
    }, 
    name: {
      description: 'Card name',
      type: 'string',
      demandOption: false
    },
    mana_cost: {
      description: 'Mana cost',
      type: 'number',
      demandOption: false
    },
    colour: {
      description: 'Card colour',
      type: 'string',
      demandOption: false
    },
    type: {
      description: 'Card type',
      type: 'string',
      demandOption: false
    },
    rarity: {
      description: 'Card rarity',
      type: 'string',
      demandOption: false
    },
    text: {
      description: 'Card text',
      type: 'string',
      demandOption: false
    },
    value: {
      description: 'Card value',
      type: 'number',
      demandOption: false
    },
    resistance: {
      description: 'Card resistance',
      type: 'number',
      demandOption: false
    },
    strength: {
      description: 'Card strength',
      type: 'number',
      demandOption: false
    },
    loyalty: {
      description: 'Card loyalty',
      type: 'number',
      demandOption: false
    }
  },
  handler: (argv) => {
    console.log("Update card with ID: " + argv.id + " for user: " + argv.user);

    if (argv.type === "Creature" || argv.type === "creature") {
      // Make sure strength and resistance are provided
      if (argv.strength === undefined || argv.resistance === undefined) {
        console.error(chalk.red.bold("Creature card must have strength and resistance"));
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
          Number(argv.resistance)
        );
      } catch (error) {
        if (error instanceof Error)
          console.error(chalk.red.bold("Error:", error.message));
        process.exit(1);
      }
      
      // Add card to the collection (json file with the fs sincronous api)
      updateCard(card, String(argv.user));
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
  }
}