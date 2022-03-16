import { personagem } from "./personagem";

export class guerreiro extends personagem{
    forcaFisica:number = 0;
    arma:string = 'Armas de Haste';
    
    constructor(name: string, tipo: string,reino: string , vestirTraje: string,aplicarGolpe: string ,aplicarSuperGolpe: string ,resistencia: string ,alcanceDeDano: string, arma:string){
        super(name,tipo,reino,vestirTraje,aplicarGolpe,aplicarSuperGolpe,resistencia,alcanceDeDano);
        this.arma = arma;
    }
    
    espadas(){
        this.arma = 'Espadas';
    }
    macas(){
        this.arma = 'Maças';
    }
    martelos(){
        this.arma = 'Martelos';
    }
    machados(){
        this.arma = 'Machados';
    }
    armadeHaste(){
        this.arma = 'Armas de Haste'
    }
}