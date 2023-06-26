/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2
}

console.log(area(3, 3))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3
    } else {
        return a + b
    }
}

console.log(crazySum(3, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num, defaultNum){
    defaultNum = 19
    if(num > defaultNum) {
        return (num - defaultNum) * 3
    } else {
        return num - defaultNum
    }
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if(n >= 20 && n <= 100 || n === 400 ) {
        return true
    } else {
        return false
    }
}

console.log(boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(p) {
    if(p.includes("EPICODE")){
        return p
    } else {
        return "EPICODE " + p
    }
}

console.log(epify("EPICODE is a professional school"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(pn) {
    if(pn % 3 === 0 || pn % 7 === 0) {
        return `The ${pn} is a multiple of 3 or 7`;
    } else {
        return `The ${pn} is NOT a multiple of 3 or 7`;
    }
}

console.log(check3and7(12));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(p) {
    let arrString =  p.split('');
    arrString.reverse();
    let reversedString = arrString.join('');
    return reversedString
}

console.log(reverseString("Emanuele"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// function upperFirst(p) {
//     let splicedStr = p.split(' ');
//     let stringify = splicedStr.ind

// }

function upperFirst(str) {
    var words = str.split(' ');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var firstLetter = word.charAt(0).toUpperCase();
      var restOfWord = word.slice(1);
      words[i] = firstLetter + restOfWord;
    }
  
    return words.join(' ');
  }
  
  console.log(upperFirst("o calloni pudesciu")); // Output: "Ciao Mondo!"
  

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
