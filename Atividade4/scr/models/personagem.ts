export class personagem{
    private name: string = '';
    private tipo: string = '';
    private reino: string = '';
    private vestirTraje: string = '';
    private aplicarGolpe: string = '';
    private aplicarSuperGolpe: string = '';
    private resistencia: string = '';
    private alcanceDeDano: string = '';

    constructor(name: string, tipo: string,reino: string , vestirTraje: string,aplicarGolpe: string ,aplicarSuperGolpe: string ,resistencia: string ,alcanceDeDano: string){
        this.name = name;
        this.tipo = tipo;
        this.reino = reino;
        this.vestirTraje = vestirTraje;
        this.aplicarGolpe = aplicarGolpe;
        this.aplicarSuperGolpe = aplicarSuperGolpe;
        this.resistencia = resistencia;
        this.alcanceDeDano = alcanceDeDano;
    }
}
