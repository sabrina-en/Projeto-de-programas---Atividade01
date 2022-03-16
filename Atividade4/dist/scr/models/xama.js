"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xama = void 0;
const personagem_1 = require("./personagem");
class xama extends personagem_1.personagem {
    constructor() {
        super(...arguments);
        this.formaDeAnimal = 'Touro';
        this.manipulacaoDeElementos = 'Magia natural';
    }
}
exports.xama = xama;
