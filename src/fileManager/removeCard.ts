import { dir } from "../magic-app.js";
import fs, { constants } from "fs";

/**
 * Remove a card from the collection. Callback function
 * @param id of the card to remove
 * @param user name of the user
 */
export const removeCard = (id: number, user: string) => {
  return new Promise<string>((resolve, reject) => {
    const userDir = `${dir}/${user}`;

    fs.promises.readdir(userDir).then(() => {
      fs.promises.access(`./${userDir}/${id}.json`, constants.F_OK).then(() => {
        fs.promises.unlink(`./${userDir}/${id}.json`).then(() => {
          resolve("Card removed from the " + user + " collection.");
        }).catch(() => reject("Error deleting the file."))
      }).catch(() => {
        reject("Error checking file. Card does not exists.")
      })
    }).catch(() => {
      reject("Error on read dir. User does not exists");
    });
  })
}