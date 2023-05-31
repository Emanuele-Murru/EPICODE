"use strict";
class User {
    carica = 0;
    numeroChiamate = 0;
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    ;
    chiamata(minutiChiamata) {
        this.carica -= minutiChiamata * 0.20;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.getNumeroChiamate;
    }
    ;
}
const firstUser = new User();
const secondUser = new User();
const thirdUser = new User();
console.log(firstUser.numero404());
firstUser.ricarica(50);
console.log(firstUser.numero404());
firstUser.chiamata(7);
console.log(firstUser.getNumeroChiamate());
console.log(firstUser.numero404());
