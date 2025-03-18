// Gli objective si idenficano tramite le parentesi graffe { }
// è una struttura che ci consente di modellare entità del mondo reale.
// ovvero in tutte quelle stuazione in cui non ci bastano stringhe, numeri, booleani, ecc..
// Avremo quindi bisogno di aggregare più informazioni dentro un'unica variabile/costante.
// sono formati da coppie di chiave-valore separate da virgole.

const student = {
  name: "Aldo",
  surname: "Baglio",
  age: 20,
  batch: "fs0225",
  hasWebcam: true,
  "e-mail": "aldo@epicode.it",
};
// possono essere innestate quante volte si vuole
const teacher = {
  name: "Stefano",
  hasWebcam: true,
  location: {
    region: "FVG",
    country: "Italy",
    coordinates: {
      lat: 49.728,
      lon: 25.272,
    },
  },
};

// ogni punto scende di un livello all'interno dell'object.
console.log(teacher.location.coordinates.lat); // ritorna ==> 49.728

console.log(student);

// per richiamare un valore si può usare la Dot notation, la più consigliata
console.log(student.name);

// oppure si può usare Square brackets notation, usata solo in un determinato caso
console.log(student["name"]);

// console.log(student.e - mail); ==> Non sono permessi caratteri speciali, identifica il- come un meno per una sottrazione.
console.log(student["e-mail"]);

// ha anche un superpotere!
// poter valutare valori dinamici (variabili) o espressioni al suo interno.

const propertyToLookUpFor = "hasWebcam";
console.log(teacher[propertyToLookUpFor]); //==> Ritorna il valore di quella proprietà.
// non bisogna usare le "" dentro le parentesi altrimenti si chiederebbe di ritornare la proprietà all'interno di teacher.

// AGGIUNGERE UN VALORE PROGRAMMATICAMENTE
teacher.height = 180;
console.log(teacher.height);
teacher.location.temp = 12;
console.log(teacher.location.temp);
// assegno una nuova proprietà con un valore assegnato

// ELIMINARE UNA PROPRIETA'
console.log(student["e-mail"]);
delete student["e-mail"];
console.log(student["e-mail"]);

// CLONAZIONE OGGETTI
const num1 = 10;
const num2 = 5;
// nel caso di primitive si copiano in maniera letterale
let num3 = num1;
num3 = num3 + 2;

const firsTeacherCoordinates = teacher.location.coordinates;
// NON HO CLONATO COORDINATES,

const cat = {
  name: "fluffyball",
  age: 2,
  furColor: "orange",
};

const cat2 = cat; // cat2 in realtà è cat

// cat.name = "Geronimo"; ==> Fare questo modificherà il nome di cat
// console.log(cat);
// console.log(cat2);

// Metodo 1) clonaione superficiale (shallow copy)
// il vantaggio di questo metodo è che si possono mettere insieme le proprietà-valore di più oggettu all'interno di un unico
const cat3 = Object.assign({}, cat);
cat3.name = "Garfield";

console.log(cat);
console.log(cat3);

// Metodo 2) clonazione profonda (deep copy)

const teacher2 = structuredClone(teacher);
teacher2.location.region = "Tuscany"; // ==> Così facendo si modifica solo la region nell'object teacher2

console.log(teacher);
console.log(teacher2);
