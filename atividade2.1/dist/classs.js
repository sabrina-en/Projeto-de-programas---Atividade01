"use strict";
/* Defina 3 Classes num arquivo Typescript.
Cada classe deve ter no mínimo 3 propriedades e 1 método.*/
/* Classe 1 */
class IdDog {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.raca = '';
    }
    identDog() {
        return ('Nome: ' + dog1.nome + ' ' + 'Idade: ' + dog1.idade + ' ' + 'Raça: ' + dog1.raca);
    };
}
let dog1 = new IdDog();
dog1.nome = 'Shakira';
dog1.idade = 11;
dog1.raca = 'Sem definição';
console.log(dog1.identDog());
/* Classe 2 */
class Cabelo {
    constructor() {
        this.tipo = '';
        this.cor = '';
        this.tamanho = '';
    }
    hair() {
        return ('Tipo: ' + ident.tipo + ' ' + 'Cor: ' + ident.cor + ' ' + 'Tamanho: ' + ident.tamanho);
    }
    ;
}
let ident = new Cabelo();
ident.tipo = 'Liso';
ident.tamanho = 'Curto';
ident.cor = 'Preto';
console.log(ident.hair());
/* Classe 3 */
class Cilindro {
    constructor() {
        this.pi = 0;
        this.altura = 0;
        this.raio = 0;
    }
    CalcularVolue() {
        return ('O volume é: ' + result.pi * result.altura * ((result.raio) * result.raio));
    }
}
let result = new Cilindro();
result.pi = 3.14;
result.altura = 10;
result.raio = 5;
console.log(result.CalcularVolue());
