"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdDog = void 0;
class IdDog {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.raca = '';
    }
    identDog() {
        return ('Nome: ' + this.nome + ' ' + 'Idade: ' + this.idade + ' ' + 'Raça: ' + this.raca);
    }
    ;
}
exports.IdDog = IdDog;
