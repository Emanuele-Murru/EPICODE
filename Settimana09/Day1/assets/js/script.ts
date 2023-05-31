// Creiamo un algoritmo che generi un numero casuale compreso tra 1 e 100 (zero escluso)
let randomNumber = ():number => {
     return Math.floor(Math.random()* 100 +1)
};

console.log(randomNumber())

let giocatore1:number = randomNumber();
let giocatore2:number = randomNumber();
let dado:number = randomNumber();
console.log(giocatore1, giocatore2, dado)


if(giocatore1 && giocatore2 !== dado) {
    if(Math.abs(dado - giocatore1) > (Math.abs(dado - giocatore2))) {
        console.log("Il giocatore 2 vince/ e' andato piu vicino");
    }else {
        console.log("Il giocatore 1 vince/ e' andato piu vicino")
    }
} else {console.log("Pareggio");}