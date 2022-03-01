import { animais } from "./animais";

export class mamiffero extends animais{
    private nomedaespecie:string = 'Canguru';
    private glandulasmamarias: boolean = true;
    private idadedoanimial:number = 0;

    constructor(tipo:string,tamanho: string,corDoPelo:string,qtIdade:number){
        super(tipo,tamanho,corDoPelo);

        this.idadedoanimial = qtIdade;
        
    }
    addIdadeDoAnimal():void;
    addIdadeDoAnimal(qt:number):void;
    addIdadeDoAnimal(qt?:number){
        if(qt){
            if(typeof qt === 'number'){
                this.idadedoanimial =qt+this.idadedoanimial;
            }
        }else{
            this.idadedoanimial++;
        }
    }
}