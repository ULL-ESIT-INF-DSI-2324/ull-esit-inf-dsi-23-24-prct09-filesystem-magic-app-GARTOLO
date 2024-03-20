/**
 * @class KnapSackReader - implements the KnapSack problem template method
 */
export abstract class KnapSackReader {
    protected wheightsSolution: number[];
    protected benefitsSolution: number[];

    constructor(
      protected capacity: number,
      protected elementsNumber: number,
      protected wheights: number[],
      protected benefits: number[]
    ) {
      this.wheightsSolution = [];
      this.benefitsSolution = [];
    }

    /**
     * @method run - execute the workflow to solve the problem
     * @returns double array with wheights and benefits
     */
    public run() {
      this.procesar();
      return this.solve()
    }

    /**
     * @method solve - Solves the KnapSack problem
     * @returns two arrays with the benefits and wheights
     */
    protected solve() {

      console.log(this.capacity)
      console.log(getKnapSack(this.capacity, this.benefits, this.wheights))
      

      return [this.wheightsSolution, this.benefitsSolution];
    }

    setCapacity(n: number) {
      this.capacity = n;
    }

    protected abstract procesar(): void;

    /**
     * "Hook" methods to implement in subclasses
     */
    protected test() {};
    protected test2() {};
}

import {readFile} from 'fs';
import { getKnapSack } from './KnapSack.js';

type elementJson = {
  numElemento: number,
  peso: number,
  beneficio: number
}

export class JSONKnapSack extends KnapSackReader {
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
          const parsed = JSON.parse(data.toString())

          this.capacity = parsed.capacidad;
          console.log(this.capacity, "must be equal to", parsed.capacidad)
          this.elementsNumber = parsed.numElementos;
          
          parsed.elementos.forEach((element: elementJson) => {
            this.wheights.push(element.peso);
            this.benefits.push(element.beneficio);
          });
        }
      });
    }
}

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