import { readFile } from "fs";
import { KnapSackReader } from "./KnapSackReader.js";

export class CSVKnapSack extends KnapSackReader {
    public filename: string;
  
    constructor(filename: string) {
      super(0,0,[],[])
      this.filename = filename
    }
  
    /**
     * @method procesar - get the data from JSON and create the KnapSack problem
     */
    protected procesar() {
      readFile(this.filename, (err, data) => {
        if (err) {
          console.log('There must be a problem with the file you are trying to read');
        } else {
          const string = data.toString().split("\n");
  
          this.capacity = Number(string[0]);
          string.shift()
          this.elementsNumber = Number(string[1]);
          string.shift()
  
          string.forEach(element => {
            this.wheights.push(Number(element[1]));
            this.benefits.push(Number(element[2]));
          });
        }
      });
    }
  }