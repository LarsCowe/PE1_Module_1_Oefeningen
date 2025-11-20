// Leer werken met JavaScript variabelen, data types (string, number, boolean) en basis operatoren. Maak een programma dat verschillende variabelen declareert en hun waarden print naar de console.
// Leer werken met JavaScript variabelen, data types (string, number, boolean) en basis operatoren. Maak een programma dat verschillende variabelen declareert en hun waarden print naar de console.

// String variabelen
let naam = "Lars";
const stad = "Amsterdam";
var bericht = "Welkom bij JavaScript!";

console.log("=== STRING VARIABELEN ===");
console.log("Naam:", naam);
console.log("Stad:", stad);
console.log("Bericht:", bericht);

// Number variabelen
let leeftijd = 25;
const jaar = 2025;
let temperatuur = 18.5;

console.log("\n=== NUMBER VARIABELEN ===");
console.log("Leeftijd:", leeftijd);
console.log("Jaar:", jaar);
console.log("Temperatuur:", temperatuur);

// Boolean variabelen
let isStudent = true;
const heeftRijbewijs = false;
let isActief = true;

console.log("\n=== BOOLEAN VARIABELEN ===");
console.log("Is student:", isStudent);
console.log("Heeft rijbewijs:", heeftRijbewijs);
console.log("Is actief:", isActief);

// Basis operatoren
console.log("\n=== REKENKUNDIGE OPERATOREN ===");
let getal1 = 10;
let getal2 = 3;

console.log("Optellen:", getal1 + getal2);
console.log("Aftrekken:", getal1 - getal2);
console.log("Vermenigvuldigen:", getal1 * getal2);
console.log("Delen:", getal1 / getal2);
console.log("Modulo (rest):", getal1 % getal2);

// String concatenatie
console.log("\n=== STRING OPERATIES ===");
let voornaam = "Jan";
let achternaam = "Janssen";
let volledigeNaam = voornaam + " " + achternaam;
console.log("Volledige naam:", volledigeNaam);
console.log("Template literal:", `Hallo, mijn naam is ${volledigeNaam}`);

// Vergelijkingsoperatoren
console.log("\n=== VERGELIJKINGSOPERATOREN ===");
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 === 10:", 10 === 10);
console.log("10 !== 5:", 10 !== 5);
