export class Pessoa {
    _nome
    _idade
    _altura
    _peso
    _imc

    static totalPessoas = 0;
    calculaImc() { return ((this._peso) / (this._altura * this._altura)).toFixed(2) }
    classificaImc() {
        if (18.5 > this.imc) {
            return "Abaixo do Peso";
        }
        if (18.5 <= this.imc && this.imc < 25) {
            return "Peso Normal"
        }
        if (25 <= this.imc && this.imc < 30) {
            return "Sobrepeso"
        }
        if (30 <= this.imc && this.imc < 35) {
            return "Obesidade Grau 1"
        }
        if (35 <= this.imc && this.imc < 40) {
            return "Obesidade Grau 2"
        }
        if (40 <= this.imc) {
            return "Obesidade Grau 3 ou Mórbida"
        }
    }
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