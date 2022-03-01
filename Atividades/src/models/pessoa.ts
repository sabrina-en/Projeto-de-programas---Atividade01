
export class pessoa{
    private name: string = '';
    private situacao: string = '';
    private data: string = '';
 
    constructor(name: string,situacao:string,data:string){
        this.name = name;
        this.situacao= situacao;
        this.data = data;
    }
}