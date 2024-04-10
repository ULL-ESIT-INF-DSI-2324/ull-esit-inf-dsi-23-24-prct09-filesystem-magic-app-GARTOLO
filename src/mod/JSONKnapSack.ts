import { readFile } from "fs";
import { KnapSackReader } from "./KnapSackReader.js";

type elementJson = {
  numElemento: number;
  peso: number;
  beneficio: number;
};

export class JSONKnapSack extends KnapSackReader {
  public filename: string;

  constructor(filename: string) {
    super(0, 0, [], []);
    this.filename = filename;
  }

  /**
   * @method procesar - get the data from JSON and create the KnapSack problem
   */
  protected procesar() {
    console.log("Executing procesar on JSON");
    readFile(this.filename, (err, data) => {
      if (err) {
        console.log(
          "There must be a problem with the file you are trying to read",
        );
      } else {
        const parsed = JSON.parse(data.toString());

        this.capacity = parsed.capacidad;
        console.log(this.capacity, "must be equal to", parsed.capacidad);
        this.elementsNumber = parsed.numElementos;

        parsed.elementos.forEach((element: elementJson) => {
          this.wheights.push(element.peso);
          this.benefits.push(element.beneficio);
        });
      }
    });
  }
}
