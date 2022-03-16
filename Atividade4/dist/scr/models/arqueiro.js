"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arqueiro = void 0;
const personagem_1 = require("./personagem");
class arqueiro extends personagem_1.personagem {
    constructor(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano, material) {
        super(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano);
        this.arcoeFecha = 'Prata';
    }
}
exports.arqueiro = arqueiro;
