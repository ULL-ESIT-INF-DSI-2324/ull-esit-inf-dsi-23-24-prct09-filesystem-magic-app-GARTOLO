import { dir } from "../magic-app.js";
import fs, { constants } from "fs";

/**
 * Remove a card from the collection. Callback function
 * @param id of the card to remove
 * @param user name of the user
 */
export const removeCard = (
  id: number,
  user: string,
  callback: (err: string | undefined, data: string | undefined) => void,
) => {
  const userDir = `${dir}/${user}`;

  // Check if the user directory exists
  fs.readdir(userDir, (err) => {
    if (err) {
      callback("Error on read dir. User does not exists", undefined);
    } else {
      fs.access(`./${userDir}/${id}.json`, constants.F_OK, (err) => {
        if (err)
          callback("Error checking file. Card does not exists.", undefined);
        else {
          fs.unlink(`./${userDir}/${id}.json`, (err) => {
            if (err) callback("Error deleting the file.", undefined);
            else
              callback(
                "Card removed from the" + user + " collection.",
                undefined,
              );
          });
        }
      });
    }
  });
};
