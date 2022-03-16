"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mamiffero = void 0;
const animais_1 = require("./animais");
class mamiffero extends animais_1.animais {
    constructor(tipo, tamanho, corDoPelo, qtIdade) {
        super(tipo, tamanho, corDoPelo);
        this.nomedaespecie = 'Canguru';
        this.glandulasmamarias = true;
        this.idadedoanimial = 0;
        this.idadedoanimial = qtIdade;
    }
    addIdadeDoAnimal(qt) {
        if (qt) {
            if (typeof qt === 'number') {
                this.idadedoanimial = qt + this.idadedoanimial;
            }
        }
        else {
            this.idadedoanimial++;
        }
    }
}
exports.mamiffero = mamiffero;
