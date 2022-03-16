import { personagem } from "./personagem";

export class ninja extends personagem{
    arma:string = 'Katana';
    agilidade:number = 0;
    constructor(name: string, tipo: string,reino: string , vestirTraje: string,aplicarGolpe: string ,aplicarSuperGolpe: string ,resistencia: string ,alcanceDeDano: string){
        super(name,tipo,reino,vestirTraje,aplicarGolpe,aplicarSuperGolpe,resistencia,alcanceDeDano)

    }

    agilidade_porcentagem():void;
    agilidade_porcentagem(qt:number):void;
    agilidade_porcentagem(qt?:number){
        if(qt){
            this.agilidade = this.agilidade/100;
        }
    }
}