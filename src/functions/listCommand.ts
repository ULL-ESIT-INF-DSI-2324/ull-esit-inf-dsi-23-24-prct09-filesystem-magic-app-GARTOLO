import {CommandModule} from "yargs";
import {listCollection} from "../fileManager/listCollection.js";

export const listCommand: CommandModule = {
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

    listCollection(String(argv.user));
  }
}