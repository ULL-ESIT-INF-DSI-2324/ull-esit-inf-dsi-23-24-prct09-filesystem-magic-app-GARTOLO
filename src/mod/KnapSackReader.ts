import { getKnapSack } from "./KnapSack.js";

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
    protected benefits: number[],
  ) {
    this.wheightsSolution = [];
    this.benefitsSolution = [];
  }

  /**
   * @method run - execute the workflow to solve the problem
   * @returns double array with wheights and benefits
   */
  public run() {
    this.test();
    this.procesar();
    this.test2();
    return this.solve();
  }

  /**
   * @method solve - Solves the KnapSack problem - Solve is not necesary on this modification, misunderstood
   * @returns two arrays with the benefits and wheights
   */
  protected solve() {
    // console.log("Capacity on solve JSON:", this.capacity);
    // console.log("N on solve JSON:", this.elementsNumber);
    console.log(getKnapSack(this.capacity, this.benefits, this.wheights));

    // console.log("Finish solve");
    return [this.wheightsSolution, this.benefitsSolution];
  }

  protected abstract procesar(): void;

  /**
   * "Hook" methods to implement in subclasses
   */
  protected test() {}
  protected test2() {}
}
