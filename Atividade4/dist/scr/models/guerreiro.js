"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guerreiro = void 0;
const personagem_1 = require("./personagem");
class guerreiro extends personagem_1.personagem {
    constructor(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano, arma) {
        super(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano);
        this.forcaFisica = 0;
        this.arma = 'Armas de Haste';
        this.arma = arma;
    }
    espadas() {
        this.arma = 'Espadas';
    }
    macas() {
        this.arma = 'Maças';
    }
    martelos() {
        this.arma = 'Martelos';
    }
    machados() {
        this.arma = 'Machados';
    }
    armadeHaste() {
        this.arma = 'Armas de Haste';
    }
}
exports.guerreiro = guerreiro;
