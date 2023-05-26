interface Smartphone {
    credito: number;
    numeroChiamate: number;

    ricarica(ricarica: number): void;
    ricarica(ricarica: number): void;
    chiamata(minutiChiamata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// SUPER CLASS:
class User implements Smartphone {

    public credito: number = 0;
    public numeroChiamate: number = 0;

    public ricarica(ricarica: number): void {
        this.credito += ricarica;
    };

    public chiamata(minutiChiamata: number): void {
        this.credito -= minutiChiamata * 0.20;
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
    ;
}

// ISTANZE / NUOVI UTENTI:
const firstUser = new User();
const secondUser = new User();
const thirdUser = new User();

// CONSOLE LOGS:

// Primo utente
console.log("Primo utente:");
console.log("------------------------------------------------");
firstUser.ricarica(50);
console.log(`Credito residuo: ${firstUser.numero404()} euri`);
firstUser.chiamata(7);
console.log(`Numero chiamate: ${firstUser.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${firstUser.numeroChiamate}`);
firstUser.azzeraChiamate();
console.log(`Numero chiamate: ${firstUser.getNumeroChiamate()}`);
console.log("");

// Secondo utente
console.log("Secondo utente:");
console.log("------------------------------------------------");
secondUser.ricarica(150);
console.log(`Credito residuo: ${secondUser.numero404()} euri`);
secondUser.chiamata(30);
secondUser.chiamata(50);
secondUser.chiamata(18);
secondUser.chiamata(22);
secondUser.chiamata(45);
console.log(`Numero chiamate: ${secondUser.getNumeroChiamate()}`);
console.log(`Credito residuo: ${secondUser.numero404()} euri`);
console.log(`Chiamate azzerate: ${secondUser.numeroChiamate}`);
console.log(`Numero chiamate: ${secondUser.getNumeroChiamate()}`);
console.log("");

// Terzo utente
console.log("Terzo utente:");
console.log("------------------------------------------------");
thirdUser.ricarica(15);
console.log(`Credito residuo: ${thirdUser.numero404()} euri`);
thirdUser.chiamata(6);
console.log(`Numero chiamate: ${thirdUser.getNumeroChiamate()}`);
thirdUser.ricarica(10);
console.log(`Credito residuo: ${thirdUser.numero404()} euri`);
thirdUser.chiamata(8);
console.log(`Numero chiamate: ${thirdUser.getNumeroChiamate()}`);
console.log(`Credito residuo: ${thirdUser.numero404()} euri`);
console.log(`Chiamate azzerate: ${thirdUser.numeroChiamate}`);
console.log(`Numero chiamate: ${thirdUser.getNumeroChiamate()}`);