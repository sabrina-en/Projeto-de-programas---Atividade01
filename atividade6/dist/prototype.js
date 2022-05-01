"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplementoMolho = exports.Pizza = void 0;
class Pizza {
    constructor(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
        this.complementoMolho = [];
    }
    clone() {
        const newObjt = new Pizza(this.sabor, this.tamanho, this.preco);
        newObjt.complementoMolho = this.complementoMolho.map((item) => item.clone());
        return newObjt;
    }
    addComplemento(complementoMolho) {
        this.complementoMolho.push(complementoMolho);
    }
}
exports.Pizza = Pizza;
class ComplementoMolho {
    constructor(molho, precoDoCompl) {
        this.molho = molho;
        this.precoDoCompl = precoDoCompl;
    }
    clone() {
        return new ComplementoMolho(this.molho, this.precoDoCompl);
    }
}
exports.ComplementoMolho = ComplementoMolho;
const molho1 = new ComplementoMolho('Mel', 14);
const pizza1 = new Pizza('Queijo', 'Médio', 59);
console.log(pizza1);
pizza1.addComplemento(molho1);
const pizza2 = pizza1.clone();
console.log(pizza1);
