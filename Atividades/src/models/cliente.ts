import { pessoa } from "./pessoa";

export class cliente extends pessoa{
    private endereco:string = 'Rua de brilhante';
    private cpf:string = '012.345.678-44';
    private objeto:string = 'Abajur';
    private valor:number = 0;

    constructor(name: string, situacao:string, data:string, qtvalor:number){
        super(name,situacao,data);
        this.valor = qtvalor;
    }

    addDesconto():void;
    addDesconto(qt:number):void;
    addDesconto(qt?:number){
        if(qt){
            if(typeof qt === 'number'){
                this.valor = this.valor-(this.valor*(qt/100));
            }
        }
        else{
            this.valor = this.valor;
        }
        
    }

}

