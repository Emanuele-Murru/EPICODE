/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


function paragona(a, b) {
  if (a > b) {
    return console.log(`${a} e' maggiore di ${b}`);
  } else if (b > a) {
    return console.log(`${b} e' maggiore di ${a}`);
  } else {
    return console.log("Pareggio");
  }
}

paragona(20, 20);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function verifica(n) {
  return (n === 5) ? console.log("Equal") : console.log("Not equal");
}

verifica(15);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


let x = 13;
if (x % 5 !== 0) {
  console.log("Questo numero non e' divisibile per 5")
} else {
  console.log("Questo numero e' divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let valore1 = 4;
let valore2 = 4;


if (valore1 === 8 || valore2 === 8) {
  console.log("Uno dei due valori equivale a 8");
} else if (valore1 + valore2 === 8) {
  console.log("L'addizione tra i due valori da come risultato 8");
} else if (valore1 - valore2 === 8) {
  console.log("La sottrazione tra i due valori da come risultato 8");
}else {
  console.log("I valori forniti non equivalgono in nessun modo a 8");
}



/* ESERCIZIO 5 e 6
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let prodotto1 = 30;
let prodotto2 = 15;
let prodotto3 = 7;


let blackFriday = true;

if(blackFriday){
  prodotto1 = prodotto1 * 0.8;
  prodotto2 = prodotto2 * 0.8;
  prodotto3 = prodotto3 * 0.8;
}

let totalShoppingCart = prodotto1 + prodotto2 + prodotto3;

if(totalShoppingCart >= 50) {
  console.log(`Per te che hai superato i 50€ di spesa avrai diritto alla spedizione gratuita. Il totale e' ${totalShoppingCart}.`);
}else {
  totalShoppingCart += 10;
  console.log(`Il totale e' ${totalShoppingCart} incluso di spese di spedizioni(10€)`)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let variabile1 = 7000;
let variabile2 = 140;
let variabile3 = 800;


if(variabile1 > variabile2 && variabile2 > variabile3){
  console.log(`In ordine crescente: ${variabile1}, ${variabile2} e ${variabile3}`);

}else if (variabile2 > variabile1 && variabile1 > variabile3){
  console.log(`In ordine crescente: ${variabile2}, ${variabile1} e ${variabile3}`);
  
}else if (variabile3 > variabile1 && variabile1 > variabile2){
  console.log(`In ordine crescente: ${variabile3}, ${variabile1} e ${variabile2}`);

}else if (variabile2 > variabile3 && variabile3 > variabile1){
  console.log(`In ordine crescente: ${variabile2}, ${variabile3} e ${variabile1}`);

}else if(variabile3 > variabile2 && variabile2 > variabile1){
  console.log(`In ordine crescente: ${variabile3}, ${variabile2} e ${variabile1}`);

}else if(variabile1 > variabile3 && variabile3 > variabile2){
  console.log(`In ordine crescente: ${variabile1}, ${variabile3} e ${variabile2}`);
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let tipoValore = "ciao";

if((typeof tipoValore) !== "number"){
  console.log("Questo valore non e' un valore di tipo number")

}else {
  console.log("Questo valore e' un valore di tipo number")

}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariDispari = 34;

if (pariDispari % 2 === 0) {
	console.log(`${pariDispari} è un numero pari!`);
} else {
	console.log(`${pariDispari} è un numero dispari!`);
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
	console.log('Meno di 5');
} else if (val < 10) {
	console.log('Meno di 10');
} else {
	console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = [];

myArray.push(1,2,3,4,5,6,7,8,9,10)

console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/


myArray[9] = 100;

console.log(myArray);

// Oppure

// myArray.pop();
// myArray.push(100)

// console.log(myArray);
