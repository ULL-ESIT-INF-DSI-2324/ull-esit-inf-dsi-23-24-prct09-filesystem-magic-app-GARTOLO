import { expect } from "chai";
import { listCollection } from "../../src/fileManager/listCollection.js";
import { removeCard } from "../../src/fileManager/removeCard.js";

describe("Async functions collection", () => {
  it("List non exist user collection should return an error", (done) => {
    listCollection("gegm22", (err) => {
      if (err) {
        expect(err).to.be.equal("Error on read dir. User does not exists");
        done();
      }
    });
  });

  it("List user collection", (done) => {
    listCollection("gegm", (_, data) => {
      if (data) {
        expect(data).to.be.an("array");
        done();
      }
    });
  });

  it("Delete a card that does not exist should return an error", (done) => {
    removeCard(999, "gegm", (err) => {
      expect(err).to.be.equal("Error checking file. Card does not exists.");
      done();
    });
  });

  it("Delete a card from user that does not exist should return an error", (done) => {
    removeCard(1, "gegm22", (err) => {
      expect(err).to.be.equal("Error on read dir. User does not exists");
      done();
    });
  });

  // it("Delete a card", (done) => {
  //   removeCard(2, "gegm", (_, data) => {
  //     expect(data).to.be.equal("Card removed from the gegm collection.");
  //     done();
  //   })
  // })
});
