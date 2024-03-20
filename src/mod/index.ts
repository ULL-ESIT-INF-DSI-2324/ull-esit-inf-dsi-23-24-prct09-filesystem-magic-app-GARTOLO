import { KnapSackReader, JSONKnapSack, CSVKnapSack } from "./KnapSackReader.js";

function resolveKnapSack(knapSackReader: KnapSackReader) {
    knapSackReader.run();
}

resolveKnapSack(new JSONKnapSack("./data/example.json"))
resolveKnapSack(new CSVKnapSack("./data/example.csv"))