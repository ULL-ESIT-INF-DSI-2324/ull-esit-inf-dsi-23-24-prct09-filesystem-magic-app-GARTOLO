import yargs, {CommandModule} from 'yargs';
import { hideBin } from 'yargs/helpers';
import {addCommand} from "./functions/addCommand.js";
import {updateCommand} from "./functions/updateCommand.js";
import { removeCommand } from './functions/removeCommand.js';

// Configure the directory for the card collection
export const dir = './CardsCollection';

const listCommand: CommandModule = {
  command: 'list',
  describe: 'List all cards in the collection',
  builder: {
    user: {
      description: 'User name',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => {
    console.log("List all cards for user: " + argv.user);
  }
}

const showCommand: CommandModule = {
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
  }
}

yargs(hideBin(process.argv))
  .command(addCommand)
  .command(updateCommand)
  .command(removeCommand)
  .command(listCommand)
  .command(showCommand)
  .demandCommand(1, 'To execute, you must provide a valid command!')
  .help()
  .argv;