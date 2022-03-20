import { personagem } from "./personagem";

export class arqueiro  extends personagem{
    arcoeFecha:string = 'Prata';
    constructor(name: string, tipo: string,reino: string , vestirTraje: string,aplicarGolpe: string ,aplicarSuperGolpe: string ,resistencia: string ,alcanceDeDano: string, material: string){
        super(name, tipo, reino, vestirTraje, aplicarGolpe, aplicarSuperGolpe, resistencia, alcanceDeDano)
    }    
    
}