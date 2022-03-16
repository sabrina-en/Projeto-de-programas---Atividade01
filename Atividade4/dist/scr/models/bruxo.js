"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bruxo = void 0;
const personagem_1 = require("./personagem");
class bruxo extends personagem_1.personagem {
    constructor(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano, qtpor) {
        super(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano);
        this.feiticio_pocao = 'Poçao do Morto Vivo';
        this.varinha = ' Noble';
        this.vassoura = 'Bluebottle';
        this.calderao = 'Caldeirão Furado';
        this.feiticio_pocao = qtpor;
    }
    pocao(qt) {
        if (qt == 'Poçao do Morto Vivo') {
            this.feiticio_pocao = 'Poçao do Morto Vivo e o dano é de 100%';
        }
        else {
            this.feiticio_pocao = 'Poçao do Morto Vivo e o dano é de 50%';
        }
    }
}
exports.bruxo = bruxo;
