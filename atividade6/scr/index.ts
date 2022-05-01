import { Facade } from "./facade";
import { ComplementoMolho, Pizza } from "./prototype";

export function show() : void {
	var facade: Facade = new Facade();
	
	/*Facade*/
	facade.onCarro();
	facade.endCarro();


	/*Prototype*/
	const molho1 = new ComplementoMolho('Mel', 14);
	const pizza1 = new Pizza('Queijo', 'Médio', 59);
	console.log(pizza1)
	pizza1.addComplemento(molho1);
	const pizza2 = pizza1.clone();
	console.log(pizza1)

}

show();


