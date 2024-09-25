// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

let eersteGetal = parseFloat(
  await userInput.question('Wat is je eerste getal? ')
);
let tweedeGetal = parseFloat(
  await userInput.question('Wat is je tweede getal? ')
);

let somVan2Getallen = eersteGetal + tweedeGetal;
console.log('Som: ' + somVan2Getallen);

process.exit();
