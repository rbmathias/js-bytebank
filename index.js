import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Rodrigo", 11122233309);
const cliente2 = new Cliente("Damy", 22233344407);

const contaCorrenteRodrigo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);

contaCorrenteRodrigo.depositar(600);
let valor = 200;
contaCorrenteRodrigo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);

