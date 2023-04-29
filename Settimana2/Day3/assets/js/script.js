// /* ESERCIZIO 1
//  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
// */

// const n1 = 5;
// const n2 = 10;

// console.log((n1 < n2) ? n2 : n1);

const x = 5;
const y = 9;

console.log(x > y)? x : y ;

// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

const randomNumero = 5;

if(randomNumero != 5) {
    console.log('not equal');
}else if(randomNumero ==5){
    console.log('Il numero è uguale a 5');
}



// const n3 = 7;

// if(n3 != 5 ) console.log("not equal");

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

const numeroDivisibile = 25;

if(numeroDivisibile % 5 === 0 ){
    console.log('Questo numero è divisibile per 5')
}else {
    console.log('Questo numero non è divisibile per 5');
}

//OPPURE
// const n4 = 55;
//  console.log((n4 % 5) === 0  ? 'Il numero è divisibile per 5' : 'Il numero non è divisibile per 5')

//OPPURE
// // const n4 = 50;
// // if ((n4 % 5) === 0) console.log('divisibile per 5');


// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

const numIntero1 = 8;
const numIntero2 = 2;

if(numIntero1 === 8 || numIntero2 === 8){
    console.log('Uno dei valori forniti è 8');
} else if((numIntero1 + numIntero2 === 8) || (numIntero1-numIntero2 === 8)) {
    console.log('La sottrazione o addizione dei due valori forniti è 8');
}else {
    console.log('I valori forniti non equivalgono in nessun modo a 8')
}

//OPPURE
// const valore1 = 4;
// const valore2 = 2;
// if(valore1 || valore2 === 8)   console.log('Il valore di uno dei numeri è uguale a 8');
// else if(valore1 + valore2 === 8 || valore1 - 2 === 8) {
//    console.log('La sottrazione/addizione dei due valori equivale a 8')
// } 

// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */


// var totalShoppingCart = 49;
// if(totalShoppingCart > 50){
//     console.log(`Il saldo totale è ${totalShoppingCart} , quindi la spedizione sarà gratuita!`);
// }else {
//     console.log(`Il saldo totale è ${totalShoppingCart + 10} con spedizione inclusa (10 euro)`)
// }


// const totalShoppingCart = 400;

// if (totalShoppingCart > 50) {
//   console.log(totalShoppingCart)
// } else {
//   console.log(totalShoppingCart + 10)
// };


// /* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
// */


var totalShoppingCart = 49;
if((totalShoppingCart * 0.8) > 50){
    console.log(`Il saldo totale è ${totalShoppingCart} , quindi la spedizione sarà gratuita!`);
}else {
    console.log(`Il saldo totale è ${(totalShoppingCart * 0.8) + 10} con spedizione inclusa (10 euro)`)
}


// /* ESERCIZIO 7
//   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
//   Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
//   Alla fine mostra il risultato in console.
// */

const a = 13;
const b = 8;
const c = 11;




// /* ESERCIZIO 8
//   Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
// */

const n10 = 'ciao';



console.log(typeof n10);

//   /* ESERCIZIO 9
//     Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
//   */

//   /* SCRIVI QUI LA TUA RISPOSTA */

//   /* ESERCIZIO 10
//     Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
//     let val = 7
//     if (val < 10) {
//         console.log("Meno di 10");
//       } else if (val < 5) {
//         console.log("Meno di 5");
//       } else {
//         console.log("Uguale a 10 o maggiore");
//       }
//   */

//   var val = 7;

// if (val < 10) {
//   console.log('Meno di 10');
// } else if (val < 5) {
//   console.log('Meno di 5');
// } else {
//   console.log('Uguale a 10 o maggiore');
// }

// /* ESERCIZIO 11
//   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me); 

// /* ESERCIZIO 12
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
// */

delete me.lastName;
console.log(me);

// /* ESERCIZIO 13
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
// */

me.skills.pop();
console.log(me);

// /* ESERCIZIO 14
//   Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
// */

new Array = [];
Array.push = 0, 2, 3, 4, 5, 6, 7, 8, 9, 10;
console.log(Array)

// /* ESERCIZIO 15
//   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */



