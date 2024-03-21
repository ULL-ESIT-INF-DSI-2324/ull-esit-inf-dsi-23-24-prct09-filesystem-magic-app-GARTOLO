import chalk from "chalk";

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
    chalk.blue.underline.bold("with a blue substring") +
    " that becomes green again!"
  )
);

import yargs, {CommandModule} from 'yargs';
import { hideBin } from 'yargs/helpers';
import {addCommand} from "./functions/addCard.js";

const updateCommand: CommandModule = {
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
    }
  },
  handler: (argv) => {
    console.log("Updating card with ID: " + argv.id);
  }
}

const removeCommand: CommandModule = {
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
  }
}

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