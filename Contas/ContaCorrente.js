import { Conta } from "./Contas/Conta.js";

export class ContaCorrente extends Conta{ //extends = classe ContaCorrente herda propriedades e métodos da classe Conta
    static numeroDeContas = 0;

    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia) //super = referência do constructor da classe mãe (Conta)
         ContaCorrente.numeroDeContas += 1;
    }

    //sobrescreve o comportamento do sacar da classe Conta
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}