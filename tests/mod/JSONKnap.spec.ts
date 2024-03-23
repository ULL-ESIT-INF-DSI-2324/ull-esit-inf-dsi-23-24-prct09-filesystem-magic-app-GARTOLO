import { expect } from "chai";
import { JSONKnapSack } from "../../src/mod/JSONKnapSack.js";

describe("JSON Tests", () => {
  const route: string = "./tests/test.json";

  const knapSack = new JSONKnapSack(route);

  it("Problem should return X", () => {
    expect(knapSack.run()).to.be.deep.equal([[], []]);
  });
});
