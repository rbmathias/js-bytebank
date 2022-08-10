import { Cliente } from "./Cliente.js";
// import { ContaCorrente } from ".Contas/ContaCorrente.js";
// import { ContaPoupanca } from ".Contas/ContaPoupanca.js";
// import { ContaSalario } from ".Contas/ContaSalario.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 11122233309, 10000);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Gabriel", 22233344408, 5000);
gerente.cadastrarSenha("654321");

const cliente = new Cliente("Damy", 33344455507, "147258");



const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "147258");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

















// const cliente1 = new Cliente("Rodrigo", 11122233309);

// const contaCorrenteRodrigo = new ContaCorrente(0, cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(60, cliente1, 1001);
// //const conta = new Conta(0,cliente1,1001);
// const contaSalario = new ContaSalario (cliente1);

// contaCorrenteRodrigo.depositar(600);
// contaCorrenteRodrigo.sacar(100);
// // let valor = 200;
// // contaCorrenteRodrigo.transferir(valor, conta2);
// contaPoupanca.sacar(20);
// contaSalario.depositar(400);
// contaSalario.sacar(30);

// console.log(contaSalario);

