// Voeg hier je eigen code in

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let name = Lars;

let age = 22;

let favoriteGame = GTA;

console.log(
  'Hallo ' +
    name +
    ', ik hoor dat je ' +
    age +
    ' jaar oud bent en dat je lievelingsgame ' +
    favoriteGame +
    ' is.'
);

process.exit();
