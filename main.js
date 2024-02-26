import { Pessoa } from "./Pessoa.js";

let Pessoa1 = new Pessoa("João", 40, 1.75, 73.5);

let Pessoa2 = new Pessoa("Maria", 17, 1.55, 20);

console.log(Pessoa1.classificaImc())
console.log(Pessoa2.classificaImc())