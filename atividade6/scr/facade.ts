export class Painel {
    public on(): void {
            console.log("Ligando o painel");        
    }
    public endOff(): void {
        console.log("Desligando o painel");        
    }
    public Play(): void {
        console.log("Painel ligado");        
    }
}

export class ArCondicionado {
    public on(): void {
        console.log("Ligando ar-condicionado");
    }
    public endOff(): void {
        console.log("Desligando ar-condicionado");        
    }
    public setVolume(volumeArcon: number){
        console.log("Ajustando ar-condicionado para " + volumeArcon);        
    }
}

export class Som {
    public on(): void {
        console.log("Ligando som do carro");
    }
    public endOff(): void {
        console.log("Desligando desligando o som ");        
    }
    public setVolume(volumeSom: number){
        console.log("Ajustando o som para: " + volumeSom);        
    }
}

export class Farrol {
    public on(): void {
            console.log("Ligando o farol");        
    }
    public endOff(): void {
        console.log("Desligando o farol");        
    }
    public Play(): void {
        console.log("Farol ligado");        
    }
    public SetFarol(ConfFarol: string){
        console.log("Ajustando o farol para " + ConfFarol)
    }
}


export class Facade {
    private painel1: Painel = new Painel();
    private arcondicionado: ArCondicionado = new ArCondicionado();
    private som: Som = new Som();
    private farol: Farrol  = new Farrol ();

    public onCarro(): void {
        console.log("Ligando todas as funções do carro");
        console.log("*****************************");
        this.painel1.on();
        this.arcondicionado.on();
        this.arcondicionado.setVolume(11);
        this.som.on();
        this.som.setVolume(50);
        this.farol.on();
        this.farol.SetFarol('Baixo');

        console.log("==========================");
    }

    public endCarro(): void {
        console.log("Desligando o carro");
        console.log("*****************************");
        this.arcondicionado.endOff();
        this.som.endOff();
        this.farol.endOff();
        this.painel1.endOff();
        console.log("==========================");
    }
}

