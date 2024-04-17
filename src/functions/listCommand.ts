import { CommandModule } from "yargs";
import { listCollection } from "../fileManager/listCollection.js";
import chalk from "chalk";
import { ICard } from "../ICard.js";
import { printCard } from "./printCard.js";

/**
 * Command to list all cards in the collection
 */
export const listCommand: CommandModule = {
  command: "list",
  describe: "List all cards in the collection",
  builder: {
    user: {
      description: "User name",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    console.log(chalk.blue("Listing all cards for user: " + argv.user));

    listCollection(String(argv.user)).then((data) => {
      if (data.length === 0) console.log(chalk.yellow.bold("No cards in the collection"));

      data.forEach((card: ICard) => {
        printCard(card);
        console.log();
      })
    }).catch((e)=> {
      console.log(chalk.bold.red(e));
    });
  },
};
