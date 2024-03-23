import { expect } from "chai";
import { createICard } from "../../src/functions/createICard.js";
import { ICard } from "../../src/ICard.js";

describe("Create Card", () => {
  let card: ICard;
  it("should create a new card", () => {
    card = createICard(
      1,
      "test-card",
      1,
      "Green",
      "Sorcery",
      "Common",
      "test-text",
      0,
    );
    expect(card).to.deep.equal({
      id: 1,
      name: "test-card",
      manaCost: 1,
      colour: "Green",
      type: "Sorcery",
      rarity: "Common",
      text: "test-text",
      value: 0,
    });
  });
  it("should throw an error if the colour is not valid", () => {
    expect(() =>
      createICard(
        1,
        "test-card",
        1,
        "Invalid",
        "Sorcery",
        "Common",
        "test-text",
        0,
      ),
    ).to.throw("Invalid colour");
  });

  it("should throw an error if the type is not valid", () => {
    expect(() =>
      createICard(
        1,
        "test-card",
        1,
        "Green",
        "Invalid",
        "Common",
        "test-text",
        0,
      ),
    ).to.throw("Invalid type");
  });
  it("should throw an error if the rarity is not valid", () => {
    expect(() =>
      createICard(
        1,
        "test-card",
        1,
        "Green",
        "Sorcery",
        "Invalid",
        "test-text",
        0,
      ),
    ).to.throw("Invalid rarity");
  });
  it("should throw an error if the mana cost is negative", () => {
    expect(() =>
      createICard(
        1,
        "test-card",
        -1,
        "Green",
        "Sorcery",
        "Common",
        "test-text",
        0,
      ),
    ).to.throw("Invalid mana cost");
  });
});
