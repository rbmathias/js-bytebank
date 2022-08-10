import { Conta } from "./Contas/Conta.js";

export class ContaPoupanca extends Conta{ 
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    //sobrescreve o comportamento do sacar da classe Conta
    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}