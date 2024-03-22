import { CommandModule } from "yargs";
import { listCollection } from "../fileManager/listCollection.js";
import chalk from "chalk";

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

    listCollection(String(argv.user));
  },
};
