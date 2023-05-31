class Calcolatore {
    codredd:number;
    redditoannuolordo:number;
    tasseinps:number;
    tasseirpef:number;

    constructor(_codredd:number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getUtileTasse():number {
        let utileTasse = ((this.redditoannuolordo * this.codredd) / 100); 
        return utileTasse;
    };

    getTasseInps():number{
        let tasseInps = ((this.getUtileTasse() * this.tasseinps) / 100);
        return tasseInps;
    }

    getTasseIrpef():number{
        let tasseIrpef = ((this.getUtileTasse() * this.tasseirpef) / 100);
        return tasseIrpef;
    };

    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = (this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    }
}

let operaio1 = new Calcolatore(40, 18000, 23, 15);
let professionista1 = new Calcolatore(54, 30000, 23, 15)
let artigiano1 = new Calcolatore(60, 25000, 23, 15)
let commerciante1 = new Calcolatore(78, 50000, 26, 15)

console.log("");
console.log(operaio1);
console.log("");
console.log(`Utile tasse operaio:${operaio1.getUtileTasse()}€`);
console.log(`tasse Inps operaio :${operaio1.getTasseInps()}€`);
console.log(`tasse Irpef operaio :${operaio1.getTasseIrpef()}€`);
console.log(`Reddito annuo netto operaio :${operaio1.getRedditoAnnuoNetto()}€`);
console.log('------------------------------------------------------------------------');
console.log("");
console.log(professionista1);
console.log("");
console.log(`Utile tasse professionista:${professionista1.getUtileTasse()}€`);
console.log(`tasse Inps professionista :${professionista1.getTasseInps()}€`);
console.log(`tasse Irpef professionista :${professionista1.getTasseIrpef()}€`);
console.log(`Reddito annuo netto professionista :${professionista1.getRedditoAnnuoNetto()}€`);
console.log('------------------------------------------------------------------------');
console.log("");
console.log(artigiano1);
console.log("");
console.log(`Utile tasse artigiano:${artigiano1.getUtileTasse()}€`);
console.log(`tasse Inps artigiano:${artigiano1.getTasseInps()}€`);
console.log(`tasse Irpef artigiano:${artigiano1.getTasseIrpef()}€`);
console.log(`Reddito annuo netto artigiano:${artigiano1.getRedditoAnnuoNetto()}€`);
console.log('------------------------------------------------------------------------');
console.log("");
console.log(commerciante1);
console.log("");
console.log(`Utile tasse commerciante:${commerciante1.getUtileTasse()}€`);
console.log(`tasse Inps commerciante:${commerciante1.getTasseInps()}€`);
console.log(`tasse Irpef commerciante:${commerciante1.getTasseIrpef()}€`);
console.log(`Reddito annuo netto commerciante:${commerciante1.getRedditoAnnuoNetto()}€`);
console.log('------------------------------------------------------------------------');
// console.log();
