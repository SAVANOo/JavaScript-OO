class Pessoa {
    _nome
    _idade
    _altura
    _peso
    _imc

    static totalPessoas = 0;
    calculaImc() { return ((this._peso) / (this._altura * this._altura)).toFixed(2) }

    constructor(nome, idade, altura, peso) {
        this._nome = nome
        this._idade = idade
        this._altura = altura
        this._peso = peso
        this._imc = this.calculaImc()
        Pessoa.totalPessoas++
    }
    get nome() {
        return this._nome
    }
    get idade() {
        return this._idade
    }
    get altura() {
        return this._altura
    }
    get imc() {
        return this._imc
    }
    get totalPessoas() {
        return this.totalPessoas
    }
    set nome(novoNome) {
        this._nome = novoNome
    }
    set idade(novaIdade) {
        this._idade = novaIdade
    }
    set altura(novoAltura) {
        this._altura = novoAltura
    }
    set peso(novaPeso) {
        this._peso = novaPeso
    }
}

let Pessoa1 = new Pessoa("João", 40, 1.75, 73.5);

let Pessoa2 = new Pessoa("Maria", 17, 1.55, 50.3);

console.log(Pessoa1)
console.log(Pessoa2)
console.log("Nome Pessoa 1 : " + Pessoa1.nome)
Pessoa1.nome = "José"
console.log("Nome Pessoa 1 : " + Pessoa1.nome)
console.log("Total de Pessoas Criadas: " + Pessoa.totalPessoas)