"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rios = void 0;
class rios {
    constructor(nome, idade, tamanho) {
        this.nome = '';
        this.idade = 0;
        this.tamanho = 0;
        this.nome = nome;
        this.idade = idade;
        this.tamanho = tamanho;
    }
    identRios() {
        return ('Nome: ' + this.nome + ' ' + 'Idade do rio: ' + this.idade + ' ' + 'Tamanho: ' + this.tamanho);
    }
    ;
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
}
exports.rios = rios;
