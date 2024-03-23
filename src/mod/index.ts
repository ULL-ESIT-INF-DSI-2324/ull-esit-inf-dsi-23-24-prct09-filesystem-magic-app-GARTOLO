import { KnapSackReader } from "./KnapSackReader.js";
import { JSONKnapSack } from "./JSONKnapSack.js";
import { CSVKnapSack } from "./CSVKnapSack.js";

function resolveKnapSack(knapSackReader: KnapSackReader) {
  knapSackReader.run();
}

resolveKnapSack(new JSONKnapSack("./data/example.json"));
resolveKnapSack(new CSVKnapSack("./data/example.csv"));
