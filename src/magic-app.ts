import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {addCommand} from "./functions/addCommand.js";
import {updateCommand} from "./functions/updateCommand.js";
import { removeCommand } from './functions/removeCommand.js';
import {listCommand} from "./functions/listCommand.js";
import {showCommand} from "./functions/showCommand.js";

// Configure the directory for the card collection
export const dir = './CardsCollection';

yargs(hideBin(process.argv))
  .command(addCommand)
  .command(updateCommand)
  .command(removeCommand)
  .command(listCommand)
  .command(showCommand)
  .demandCommand(1, 'To execute, you must provide a valid command!')
  .help()
  .argv;