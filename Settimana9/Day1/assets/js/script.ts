// Creiamo un algoritmo che generi un numero casuale compreso tra 1 e 100 (zero escluso)
let randomNumber = ():number => {
     return Math.floor(Math.random()* 100 +1)
};

console.log(randomNumber())

let giocatore1 = randomNumber();
let giocatore2 = randomNumber();
let dado = randomNumber();
console.log(giocatore1, giocatore2, dado)


if(giocatore1 && giocatore2 !== dado) {
    if(Math.abs(dado - giocatore1) > (Math.abs(dado - giocatore2))) {
        console.log("Il giocatore 2 vince/ e' andato piu vicino");
    }else {
        console.log("Il giocatore 1 vince/ e' andato piu vicino")
    }
} else {console.log("Pareggio");}

// Creiamo un enum per inserire piu variabili all'interno
// Ricordiamoci che per creare un enum il nome deve aver l'iniziale in maiuscolo

// enum Partita {giocatore1 = randomNumber(), giocatore2 = randomNumber(), dado = randomNumber()}

// console.log(Partita);

// const gioca = ():void => {

//     if(Partita.giocatore1 && Partita.giocatore2 !== Partita.dado){

//         if(Math.abs(Partita.dado-Partita.giocatore1) > Math.abs(Partita.dado-Partita.giocatore2)) {
//             console.log("Il giocatore 2 vince/ e' andato piu vicino");
            
//         } else {
//             console.log("Il giocatore 1 vince/ e' andato piu vicino")
//         }

//     } else {
//         console.log("Pareggio");
//     }
// }