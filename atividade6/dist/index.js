"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const facade_1 = require("./facade");
const prototype_1 = require("./prototype");
function show() {
    var facade = new facade_1.Facade();
    /*Facade*/
    facade.onCarro();
    facade.endCarro();
    /*Prototype*/
    const molho1 = new prototype_1.ComplementoMolho('Mel', 14);
    const pizza1 = new prototype_1.Pizza('Queijo', 'Médio', 59);
    console.log(pizza1);
    pizza1.addComplemento(molho1);
    const pizza2 = pizza1.clone();
    console.log(pizza1);
}
exports.show = show;
show();
