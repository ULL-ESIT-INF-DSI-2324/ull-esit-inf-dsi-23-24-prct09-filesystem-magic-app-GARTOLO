import { ICard } from "../ICard.js";
import { dir } from "../magic-app.js";
import fs from "fs";

/**
 * List all cards in the collection for a user
 * @param user name of the user
 */
export const listCollection = (user: string) => {
  return new Promise<ICard[]>((resolve, reject) => {
    const userDir = `${dir}/${user}`;

    fs.promises.readdir(userDir).then((data) => {
      resolve(getCards(userDir, data));
    }).catch(() => {
      reject("Error on read dir. User does not exists");
    })
  });
};

/**
 * Get the cards from files data
 * @param userDir
 * @param files
 */
export const getCards = (userDir: string, files: string[]) => {
  return new Promise<ICard[]>((resolve, reject) => {
    const collection: ICard[] = [];

    files.forEach((file) => {
      fs.promises.readFile(`${userDir}/${file}`, {encoding: "utf-8"}).then((data) => {
        const card = JSON.parse(data);
        collection.push(card);

        if (files.indexOf(file) === files.length -1)
          resolve(collection);
      }).catch(() => {
        reject("Error on reading file.")
      })
    })
  })
}
