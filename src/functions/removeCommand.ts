import {CommandModule} from 'yargs';
import { removeCard } from '../fileManager/removeCard.js';

export const removeCommand: CommandModule = {
  command: 'remove',
  describe: 'Remove a card from the collection',
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
    console.log("Remove card with ID: " + argv.id + " for user: " + argv.user);

    removeCard(Number(argv.id), String(argv.user));
  }
}