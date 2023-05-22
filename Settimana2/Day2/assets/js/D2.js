/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono diversi tipi di dati, ma i più utilizzati e conosciuti sono:
1. int che viene utilizzato per i numeri senza far conto se sono decimali o interi;
2. float che anche lui viene utilizzato sempre per i numeri ma lui fa distinzione tra quelli decimali e quelli interi;
3. string non è altro che del testo racchiuso tra gli apici;
4. E in fine il dato Booleano che può possedere 2 soli valori che sono TRUE (vero) e FALSE (falso) e ci posso servire per controllare delle situazioni e fargli eseguire compiti a seconda del valore restituito, creando delle condizioni; 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var nome = 'Emanuele';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const valore1 = 12;
const valore2 = 20;
const somma = valore1 + valore2;

console.log(somma); //or directly console.log(valore1 + valore2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

nome = 'Murru';
console.log(nome);

//The next example it'll be an error -->

// const myName = 'Emanuele';
// myName = 'Luca'
// console.log(myName);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);
console.log(x - 4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


// const name1 = 'john';
// const name2 = 'John';

// console.log(name1===name2);

// const name2LowerCase = name2.toLowerCase();

// console.log(name1 === name2LowerCase);
// // var nome1e2 = name2.toLowerCase();

// // console.log(nome1e2 === name1);



// const name1 = 'john';
// let name2 = 'John';

// console.log(name1 === name2);

// name2 = name2.toLowerCase;
// console.log(name1 === name2);


const name1 = john;
const name2 = John;


if(name1 === name2) {
  console.log("");