// Delete the user directory
import fs from "fs";
import { dir } from "../../src/magic-app.js";
import { createICard } from "../../src/functions/createICard.js";
import { stub } from "sinon";
import { expect } from "chai";
import { addCard } from "../../src/fileManager/addCard.js";
import chalk from "chalk";
import { updateCard } from "../../src/fileManager/updateCard.js";
import { removeCard } from "../../src/fileManager/removeCard.js";
import { listCollection } from "../../src/fileManager/listCollection.js";

const user: string = "test-user";

const card = createICard(
  1,
  "test-card",
  1,
  "Green",
  "Sorcery",
  "Common",
  "test-text",
  0,
);

describe("FileManager", () => {
  before(() => {
    if (fs.existsSync(`${dir}/${user}`)) {
      fs.rmSync(`${dir}/${user}`, { recursive: true });
    }
  });

  it("Should add a new card to the user directory", () => {
    const consoleLogStub = stub(console, "log");
    addCard(card, user);
    expect(
      consoleLogStub.calledWith(
        chalk.green.bold("Card added to the", user, "collection."),
      ),
    ).to.be.true;
    consoleLogStub.restore();
  });

  it("Should throw an error if the card already exists", () => {
    const consoleErrorStub = stub(console, "error");
    addCard(card, user);
    expect(consoleErrorStub.calledWith(chalk.red.bold("Card already exists")))
      .to.be.true;
    consoleErrorStub.restore();
  });

  it("Should update the card if it already exists", () => {
    const consoleLogStub = stub(console, "log");
    const updatedCard = createICard(
      1,
      "test-card",
      1,
      "Green",
      "Sorcery",
      "Common",
      "test-text",
      1,
    );
    updateCard(updatedCard, user);
    expect(
      consoleLogStub.calledWith(
        chalk.green.bold("Card updated in the", user, "collection."),
      ),
    ).to.be.true;
    consoleLogStub.restore();
  });

  it("Should throw an error if the card does not exist when updating", () => {
    const consoleErrorStub = stub(console, "error");
    const updatedCard = createICard(
      2,
      "test-card",
      1,
      "Green",
      "Sorcery",
      "Common",
      "test-text",
      1,
    );
    updateCard(updatedCard, user);
    expect(consoleErrorStub.calledWith(chalk.red.bold("Card does not exist")))
      .to.be.true;
    consoleErrorStub.restore();
  });

  it("Should remove the card from the user directory", () => {
    const consoleLogStub = stub(console, "log");
    removeCard(card.id, user);
    expect(
      consoleLogStub.calledWith(
        chalk.green.bold("Card removed from the", user, "collection."),
      ),
    ).to.be.true;
    consoleLogStub.restore();
  });

  it("Should throw an error if the card does not exist when removing", () => {
    const consoleErrorStub = stub(console, "error");
    removeCard(card.id, user);
    expect(consoleErrorStub.calledWith(chalk.red.bold("Card does not exist")))
      .to.be.true;
    consoleErrorStub.restore();
  });

  it("Should print an error when listing the collection of a user that does not exist", () => {
    const consoleErrorStub = stub(console, "error");
    const user = "invalid-user";
    listCollection(user);
    expect(consoleErrorStub.calledWith(chalk.red.bold("User does not exist")))
      .to.be.true;
    consoleErrorStub.restore();
  });
});
