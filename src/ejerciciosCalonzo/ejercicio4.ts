interface Component{
    build():void;
}

class OneComponent implements Component {
    
    build(): void {
        console.log("este es el primer componente ");
    }

}

class ArregloComponent implements Component{
    private componentes: Component[]=[];
   
   agregarComponent(componente:Component):void{
    this.componentes.push(componente)
   }

   build(): void {
    console.log("Construyendo Contenedor");
    for (const componente of this.componentes) {
        componente.build();
    }
   }
}

abstract class Decorador implements Component{
    protected componente:Component;
    constructor( componente:Component){
        this.componente= componente

    }
    build(): void {
        this.componente.build();
    }

}

class DecoradorConcreto extends Decorador {
    build(): void {
        super.build();
        console.log("Aplicando decorador adicional");
    }
}

interface Observador{
    notificar():void;
}

class ComponenteEstado implements Observador{
    constructor(){

    }
    private observadores: Observador[]=[];
    private estado: string='inicial';

    agregarObservador(observador: Observador){
        return this.observadores.push(observador);

    }

    setEstado(nuevoEstado:string){
        this.estado= nuevoEstado;
        this.notificarObservadores();
        

    }

    notificar(): void {
        console.log("Notificación desde ComponenteEstado");
    }

   notificarObservadores():void{
    for ( const observador of this.observadores){
        observador.notificar();
    }
   }
   build(): void {
    console.log(`Construyendo Componente con estado: ${this.estado}`);
}


}

class ObservadorConcreto implements Observador {
    notificar(): void {
        console.log("Observador notificado de un cambio de estado.");
    }
}

// Crear componentes
let componenteSimple = new OneComponent();
let contenedor = new ArregloComponent();
contenedor.agregarComponent(componenteSimple);

// Decorar el componente
let decorado = new DecoradorConcreto(contenedor);

// Crear componente con estado y observadores
let componenteConEstado = new ComponenteEstado();
let observador1 = new ObservadorConcreto();
let observador2 = new ObservadorConcreto();
componenteConEstado.agregarObservador(observador1);
componenteConEstado.agregarObservador(observador2);

// Cambiar estado y notificar
componenteConEstado.setEstado("nuevo estado");
componenteConEstado.build();

// Construir los componentes decorados
decorado.build();
