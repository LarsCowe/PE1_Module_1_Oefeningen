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

// Logische operatoren
console.log("\n=== LOGISCHE OPERATOREN ===");
let heeftAccount = true;
let isIngelogd = false;
console.log("EN operator (&&):", heeftAccount && isIngelogd);
console.log("OF operator (||):", heeftAccount || isIngelogd);
console.log("NIET operator (!):", !isIngelogd);

// Type conversies (met fouten!)
console.log("\n=== TYPE CONVERSIES ===");
let stringGetal = "42";
let getalVanString = Number(stringGetal);
console.log("String naar number:", getalVanString);

// FOUT: variabele niet gedeclareerd
nietGedeclareerd = "Deze variabele is niet gedeclareerd!";
console.log(nietGedeclareerd);

// FOUT: const proberen te wijzigen
const vastGetal = 100;
vastGetal = 200; // Dit geeft een error!
console.log("Vast getal:", vastGetal);

// Arrays (met fout)
console.log("\n=== ARRAYS ===");
let getallen = [1, 2, 3, 4, 5];
console.log("Array:", getallen);
console.log("Eerste element:", getallen[0]);
// FOUT: verkeerde array syntax
let fruitjes = [appel, "banaan", "peer"]; // appel is niet tussen quotes!
console.log("Fruit:", fruitjes);

// Undefined en null
console.log("\n=== UNDEFINED EN NULL ===");
let ongedefinieerd;
let leeg = null;
console.log("Undefined:", ongedefinieerd);
console.log("Null:", leeg);

// FOUT: delen door nul
console.log("\n=== WISKUNDIGE BEWERKINGEN ===");
let resultaat = 10 / 0;
console.log("Delen door 0:", resultaat);
let vreemdeBerekening = "5" * 2; // String vermenigvuldigen?
console.log("String * number:", vreemdeBerekening);

// FOUT: ontbrekende haakje
console.log("\n=== LAATSTE SECTIE ===");
let laatsteVariabele = "Einde van het programma";
console.log(laatsteVariabele);

// Increment en decrement operatoren
console.log("\n=== INCREMENT/DECREMENT ===");
let teller = 0;
console.log("Start teller:", teller);
teller++;
console.log("Na teller++:", teller);
teller--;
console.log("Na teller--:", teller);
teller += 5;
console.log("Na teller += 5:", teller);

// FOUT: verkeerde operator
let foutTeller = 10;
foutTeller =+ 5; // Moet += zijn, niet =+
console.log("Fout teller:", foutTeller);

// Objecten (met fouten)
console.log("\n=== OBJECTEN ===");
let persoon = {
    naam: "Emma",
    leeftijd: 30,
    stad: "Utrecht"
};
console.log("Persoon:", persoon);
console.log("Naam van persoon:", persoon.naam);

// FOUT: komma vergeten in object
let auto = {
    merk: "Toyota",
    model: "Corolla", // Vergeten komma op vorige regel!
    jaar: 2020
};
console.log("Auto:", auto);

// NaN en Infinity
console.log("\n=== SPECIALE WAARDEN ===");
let geenGetal = "text" - 5;
console.log("NaN voorbeeld:", geenGetal);
console.log("Is NaN?:", isNaN(geenGetal));
let oneindig = 1 / 0;
console.log("Infinity:", oneindig);

// FOUT: verkeerde vergelijking
console.log("\n=== VERGELIJKINGEN ===");
let looseEquals = "5" == 5; // Gebruik === in plaats van ==
console.log("Loose equality:", looseEquals);
let strictEquals = "5" === 5;
console.log("Strict equality:", strictEquals);

// Ternary operator
console.log("\n=== TERNARY OPERATOR ===");
let score = 75;
let resultaat = score >= 60 ? "Geslaagd" : "Gezakt";
console.log("Resultaat:", resultaat);

// FOUT: ontbrekende puntkomma en haakje
console.log("\n=== BEREKENINGEN ===");
let som = (5 + 3 * 2); // Haakje niet gesloten!
console.log("Som:", som);

// Type checking
console.log("\n=== TYPE CHECKING ===");
console.log("Type van 'hello':", typeof "hello");
console.log("Type van 42:", typeof 42);
console.log("Type van true:", typeof true);
console.log("Type van undefined:", typeof undefined);
console.log("Type van null:", typeof null); // Geeft "object" (bekende JavaScript quirk)

// FOUT: variabele naam met spatie
let mijn variabele = "Dit werkt niet!"; // Spatie in variabele naam!
console.log(mijn variabele);
