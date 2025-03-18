// COSTRUTTO IF

// if è una parola riservata che attiva la valutazione di un dato, che se risultante positivo, farà scattare l'esecuzione del suo blocco
// in alternativa può (non obbligatoriamente) far scatenare un blocco alternativo

// if (condizione da valutare) {
// blocco di codice da eseguire se la condizione si verifica (diventa true)
// }

const person = {
  name: "Mario",
  age: 19,
  eyeColor: "green",
};

if (person.age >= 18 && (person.eyeColor === "blue" || person.eyeColor === "azure")) {
  console.log("Benvenuto ragazzo. Hai degli occhi bellissimi.");
} else {
  console.log("I tuoi occhi non mi piacciono.");
}

const num = 55;

if (num > 50) {
  console.log("Il numero è maggiore di 50.");
}
if (num < 100) {
  console.log("Il numero è minore di 100.");
} else if (num >= 30) {
  console.log("Il numero è 30 o maggiore, ma inferiore a 50.");
}
