// ARRAY - Liste
// sono liste di elementi POSSIBILMENTE eterogenei

const students = ["Matteo", "Dario", "Giovanni", "Luca"];
const numbers = [12, 13, 14, 15];
const booleans = [true, false, false, true];
const movies = [
  { title: "Superman", year: 2010 },
  { title: "Batman", year: 2020 },
  { title: "WonderWoman", year: 2015 },
];
const coords = [
  [30.2, 10.2],
  [25.5, 48.01],
  [10.5, 15.4],
];

const animali = ["gatto", "cane", "coniglio"];

const unAnimale = animali[0];
console.log(unAnimale); // ==> Ritorna l'elemento nella lista con quell'indice.
console.log(movies[1].title); // ==> Ritorna il title dell'indice 1 di quella lista, si usa dot notation

// COME MODIFICARE UN ARRAY

// Aggiungere un elemento alla fine della lista
console.log("students lenght", students.length);

students.push("Asia");
students.push("Daniele");
console.log(students);
console.log("students lenght", students.length);

console.log("last student", students[students.length - 1]);

// .unshift - aggiunge un elemento all'inizio della lista
students.unshift("Gianni");
console.log(students);

// .pop() - Rimuove l'ultimo elemento della lista
students.pop();
console.log(students);

// .shift() - Rimuove il primo elemento della lista
students.shift();
console.log(students);

// .slice() - Serve a creare un NUOVO ARRAY a partire da una porzione dell'originale, quindi otterremo un array di potenzialmente minor elementi
const selectedStudents = students.slice(1, 4); // ==> Si inserisco l'indice di partenza e quello di arrivo, però -1. Uno slice senza parametri prende tutti gli elementi della lista.
console.log(selectedStudents);

// .splice() - Serve a modificare l'array su cui lo si utilizza
