"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = exports.Farrol = exports.Som = exports.ArCondicionado = exports.Painel = void 0;
class Painel {
    on() {
        console.log("Ligando o painel");
    }
    endOff() {
        console.log("Desligando o painel");
    }
    Play() {
        console.log("Painel ligado");
    }
}
exports.Painel = Painel;
class ArCondicionado {
    on() {
        console.log("Ligando ar-condicionado");
    }
    endOff() {
        console.log("Desligando ar-condicionado");
    }
    setVolume(volumeArcon) {
        console.log("Ajustando ar-condicionado para " + volumeArcon);
    }
}
exports.ArCondicionado = ArCondicionado;
class Som {
    on() {
        console.log("Ligando som do carro");
    }
    endOff() {
        console.log("Desligando desligando o som ");
    }
    setVolume(volumeSom) {
        console.log("Ajustando o som para: " + volumeSom);
    }
}
exports.Som = Som;
class Farrol {
    on() {
        console.log("Ligando o farol");
    }
    endOff() {
        console.log("Desligando o farol");
    }
    Play() {
        console.log("Farol ligado");
    }
    SetFarol(ConfFarol) {
        console.log("Ajustando o farol para " + ConfFarol);
    }
}
exports.Farrol = Farrol;
class Facade {
    constructor() {
        this.painel1 = new Painel();
        this.arcondicionado = new ArCondicionado();
        this.som = new Som();
        this.farol = new Farrol();
    }
    onCarro() {
        console.log("Ligando todas as funções do carro");
        console.log("*****************************");
        this.painel1.on();
        this.arcondicionado.on();
        this.arcondicionado.setVolume(11);
        this.som.on();
        this.som.setVolume(50);
        this.farol.on();
        this.farol.SetFarol('Baixo');
        console.log("==========================");
    }
    endCarro() {
        console.log("Desligando o carro");
        console.log("*****************************");
        this.arcondicionado.endOff();
        this.som.endOff();
        this.farol.endOff();
        this.painel1.endOff();
        console.log("==========================");
    }
}
exports.Facade = Facade;
