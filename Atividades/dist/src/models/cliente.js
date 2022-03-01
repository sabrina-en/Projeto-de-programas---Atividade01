"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliente = void 0;
const pessoa_1 = require("./pessoa");
class cliente extends pessoa_1.pessoa {
    constructor(name, situacao, data, qtvalor) {
        super(name, situacao, data);
        this.endereco = 'Rua de brilhante';
        this.cpf = '012.345.678-44';
        this.objeto = 'Abajur';
        this.valor = 0;
        this.valor = qtvalor;
    }
    addDesconto(qt) {
        if (qt) {
            if (typeof qt === 'number') {
                this.valor = this.valor - (this.valor * (qt / 100));
            }
        }
    }
}
exports.cliente = cliente;
