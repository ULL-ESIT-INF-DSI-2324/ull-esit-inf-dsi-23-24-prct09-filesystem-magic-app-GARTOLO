import { expect } from "chai";
import { CSVKnapSack } from "../../src/mod/KnapSackReader.js"

describe ("CSV Tests", () => {
    const route: string = "./tests/test.csv"

    const knapSack = new CSVKnapSack(route);

    it("Problem should return X", () => {
        expect(knapSack.run()).to.be.deep.equal([
            [],
            []
        ])
    });
})