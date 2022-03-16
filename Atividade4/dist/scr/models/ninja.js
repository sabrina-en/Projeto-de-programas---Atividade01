"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ninja = void 0;
const personagem_1 = require("./personagem");
class ninja extends personagem_1.personagem {
    constructor(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano) {
        super(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano);
        this.arma = 'Katana';
        this.agilidade = 0;
    }
    agilidade_porcentagem(qt) {
        if (qt) {
            this.agilidade = this.agilidade / 100;
        }
    }
}
exports.ninja = ninja;
