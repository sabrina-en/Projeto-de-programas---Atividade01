
export class animais{
    private tipo: string = '';
    private tamanho: string = '';
    private corDoPelo: string = '';
 
    constructor(tipo: string,tamanho:string,corDoPelo:string){
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.corDoPelo = corDoPelo;
    }
}