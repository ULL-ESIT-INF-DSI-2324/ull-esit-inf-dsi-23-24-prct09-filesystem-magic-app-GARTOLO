import {CommandModule} from 'yargs';
import {CardColour, CardRarity, CardType, ICreatureCard} from "../ICard.js";

export const addCommand: CommandModule = {
  command: 'add',
  describe: 'Add a new card to the collection',
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
    mana_cost: {
      description: 'Mana cost',
      type: 'number',
      demandOption: true
    },
    colour: {
      description: 'Card colour',
      type: 'string',
      demandOption: true
    },
    type: {
      description: 'Card type',
      type: 'string',
      demandOption: true
    },
    rarity: {
      description: 'Card rarity',
      type: 'string',
      demandOption: true
    },
    text: {
      description: 'Card text',
      type: 'string',
      demandOption: true
    },
    value: {
      description: 'Card value',
      type: 'number',
      demandOption: true
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
    console.log("Add card with ID: " + argv.id + " for user: " + argv.user);

  if (argv.type === "Creature" || argv.type === "creature") {
      // Make sure strength and resistance are provided
      if (argv.strength === undefined || argv.resistance === undefined) {
        console.error("Creature card must have strength and resistance");
        process.exit(1);
      }

      // Check if Colour exist ond CardColour enum
      if (!Object.values(CardColour).includes(argv.colour as CardColour)) {
        console.error("Invalid card colour");
        process.exit(1);
      }

      // Create a creature card
      const card: ICreatureCard = {
        id: Number(argv.id),
        name: String(argv.name),
        manaCost: Number(argv.mana_cost),
        colour: argv.colour as CardColour,
        type: argv.type as CardType.Creature,
        rarity: argv.rarity as CardRarity,
        text: String(argv.text),
        value: Number(argv.value),
        strength: Number(argv.strength),
        resistance: Number(argv.resistance)
      };

      // Add card to the collection (json file)
    
    } else if (argv.type === "Planeswalker" || argv.type === "planeswalker") {
      // Make sure loyalty is provided
      if (argv.loyalty === undefined) {
        console.error("Planeswalker card must have loyalty");
        process.exit(1);
      }

    }
  }
}


