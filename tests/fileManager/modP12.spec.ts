import { expect } from "chai";
import { listCollection } from "../../src/fileManager/listCollection.js";
import { removeCard } from "../../src/fileManager/removeCard.js";
import { addCard } from "../../src/fileManager/addCard.js";
import { ICard } from "../../src/ICard.js";
import { createICard } from "../../src/functions/createICard.js";

describe("Promise functions collection", () => {
  it("List non exist user collection should return an error", () => {
    return listCollection("gegm22").catch((err) => {
      expect(err).to.be.equal("Error on read dir. User does not exists");
    })
  });

  it("List user collection", () => {
    return listCollection("gegm").then((data) => {
      expect(data).to.be.an("array");
    })
  });

  it("Delete a card that does not exist should return an error", () => {
    return removeCard(999, "gegm").catch((err) => {
      expect(err).to.be.equal("Error checking file. Card does not exists.");
    })
  });

  it("Delete a card from user that does not exist should return an error", () => {
    return removeCard(1, "gegm22").catch((err) => {
      expect(err).to.be.equal("Error on read dir. User does not exists");
    })
  });

  const card: ICard = createICard(
    3,
    "test-card",
    1,
    "Green",
    "Sorcery",
    "Common",
    "test-text",
    0,
  );
  addCard(card, "gegm");

  it("Delete a card", () => {
    return removeCard(3, "gegm").then((data) => {
      expect(data).to.be.equal("Card removed from the gegm collection.")
    })
  })
});
