import { personagem } from "./personagem";

export class bruxo extends personagem{
    private feiticio_pocao:string = 'Poçao do Morto Vivo';
    private varinha:string = ' Noble';
    private vassoura:string = 'Bluebottle';
    private calderao:string = 'Caldeirão Furado';    

    constructor(name: string, tipo: string,reino: string , vestirTraje: string,aplicarGolpe: string ,aplicarSuperGolpe: string ,resistencia: string ,alcanceDeDano: string, qtpor:string){
        super(name,tipo,reino,vestirTraje,aplicarGolpe,aplicarSuperGolpe,resistencia,alcanceDeDano);
        this.feiticio_pocao = qtpor;
    }
    pocao():void;
    pocao(qt:string):void;
    pocao(qt?:string){
        if(qt == 'Poçao do Morto Vivo'){
            this.feiticio_pocao = 'Poçao do Morto Vivo e o dano é de 100%';
        }
        else{
            this.feiticio_pocao = 'Poçao do Morto Vivo e o dano é de 50%';
        }
    }

}
