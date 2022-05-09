import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((response) => json(response)).then((data) => {
        resolve(JSON.parse(data));
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}
