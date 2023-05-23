class SonAccount {
    nome:string;
    cognome:string;
    
    balanceInit:number = 0;  

    constructor(_nome:string, _cognome:string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getAccount(): string {
        return `${this.nome} ${this.cognome}`
    }

    oneDeposit(versamento:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`);
        console.log(`Deposit: ${versamento} euri`);
       this.balanceInit += versamento;
        return `Total balance: ${this.balanceInit} euri`
    }

    oneWithdraw(prelievo:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`)
        console.log(`Whitdraw: ${prelievo} euri`)
        this.balanceInit -= prelievo;
        return `Total balance ${this.balanceInit} euri`
    }
    
    twoDeposit(versamento:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`);
        console.log(`Deposit: ${versamento} euri`);
        this.balanceInit += versamento;
        return `Total balance: ${this.balanceInit} euri`
    }

    twoWithdraw(prelievo:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`)
        console.log(`Whitdraw: ${prelievo} euri`)
        this.balanceInit -= prelievo;
        return `Total balance ${this.balanceInit} euri`
    }
}

class MotherAccount extends SonAccount{
    
    constructor(_nome:string, _cognome:string,) {
        super(_nome, _cognome);
    }

    twoDeposit(versamento:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`);
        console.log(`Deposit: ${versamento} euri`);
        versamento += (versamento * 0.1);
        this.balanceInit += versamento;
        return `Total balance plus 10% interests: ${this.balanceInit} euri`
    }

    twoWithdraw(prelievo:number):string {
        console.log(`Actual balance: ${this.balanceInit} euri`)
        console.log(`Whitdraw: ${prelievo} euri`)
        prelievo -= (prelievo / 100 * 10)
        this.balanceInit -= prelievo;
        return `Total Balance less 10% interests:${this.balanceInit} euri`
    }

}

let newSon = new SonAccount('Emanuele', 'Murru');

console.log('');
console.log('');
console.log(newSon);
console.log('-------------------------------------------------------');
console.log(newSon.getAccount());
console.log('-------------------------------------------------------');
console.log("DEPOSIT");
console.log(newSon.oneDeposit(150));
console.log('-------------------------------------------------------');
console.log("WITHDRAW");
console.log(newSon.oneWithdraw(200));
console.log('-------------------------------------------------------');
console.log("DEPOSIT");
console.log(newSon.twoDeposit(2050));
console.log('-------------------------------------------------------');
console.log("WITHDRAW");
console.log(newSon.twoWithdraw(200));
console.log('-------------------------------------------------------');
 

let newMom = new MotherAccount('Lidia', 'Kovac');

console.log('');
console.log('');
console.log(newMom);
console.log('-------------------------------------------------------');
console.log(newMom.getAccount());
console.log('-------------------------------------------------------');
console.log("DEPOSIT");
console.log(newMom.twoDeposit(3050));
console.log('-------------------------------------------------------');
console.log("WITHDRAW");
console.log(newMom.twoWithdraw(235));
console.log('-------------------------------------------------------');
console.log("DEPOSIT");
console.log(newMom.twoDeposit(8050));
console.log('-------------------------------------------------------');
console.log("WITHDRAW");
console.log(newMom.twoWithdraw(800));
console.log('-------------------------------------------------------');
 