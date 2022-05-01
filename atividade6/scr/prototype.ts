export interface Prototype {
    clone(): Prototype;
}

export class Pizza implements Prototype{
    public complementoMolho: ComplementoMolho[] = [];
    constructor( public sabor: string, public tamanho: string, public preco: number){}
    clone(): Pizza {
        const newObjt = new Pizza(this.sabor, this.tamanho, this.preco);
        newObjt.complementoMolho = this.complementoMolho.map((item) => item.clone());
        return newObjt;
    }
    addComplemento(complementoMolho: ComplementoMolho): void{
        this.complementoMolho.push(complementoMolho);
    }
}

export class ComplementoMolho implements Prototype{
    constructor(public molho: string, public precoDoCompl: number){}
    clone(): ComplementoMolho {
        return new ComplementoMolho(this.molho, this.precoDoCompl);
    }

}

const molho1 = new ComplementoMolho('Mel', 14);
const pizza1 = new Pizza('Queijo', 'Médio', 59);
console.log(pizza1)
pizza1.addComplemento(molho1);
const pizza2 = pizza1.clone();
console.log(pizza1)
