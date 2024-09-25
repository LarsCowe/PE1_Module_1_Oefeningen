// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

let dagen = await userInput.question('Geef het aantal dagen: ');

let uren = await userInput.question('Geef het aantal uren: ');

let minuten = await userInput.question('Geef het aantal minuten: ');

let seconden = await userInput.question('Geef het aantal seconden: ');

let dagenInSeconden = dagen * 24 * 60 * 60;
let urenInSeconden = uren * 60 * 60;
let secondenPerMinuut = minuten * 60;

let totaalInSeconden =
  dagenInSeconden + urenInSeconden + secondenPerMinuut + seconden;

console.log(totaalInSeconden);

process.exit();
