//Classe abstrata (não pode ser instanciada, somente herdada)
export class Conta{

constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
        throw new Error("Você não deveria instanciar um objeto do tipo 'conta' diretamente, pois essa é uma classe abstrata.");
    }
    
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
}


set cliente(novoValor){
    if(novoValor instanceof Cliente){
    this._cliente = novoValor;
    }
}

get cliente(){
    return this._cliente;
}

get saldo(){
    return this._saldo;
}

//Método abstrato (não pode ser chamado diretamente, sempre sobescrito)
sacar(valor) {
    throw new Error("O método 'sacar' da conta é abstrato.");
}

_sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){ //this se relaciona diretamente com a classe
        this._saldo -= valorSacado;
        return valorSacado; //return para finalizar método após execução
    }

    return 0;
}

depositar(valor){
    if(valor <= 0){
        return;
    }
    this._saldo += valor;
}

transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
}
}