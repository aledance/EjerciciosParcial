/*interface Predicado<T>{
    cumple(t:T): boolean;
}

interface funcion<T>{
    aplicar(t:T):void;
}

class Nodo<T>{
    public valor:T;

    constructor( valor:T){
        this.valor=valor;
    }

    cumple( p:Predicado<T>):boolean{
        return p.cumple(this.valor);

    }

    aplicar( f:funcion<T>, p:Predicado<T>): void{
        return f.aplicar(this.valor)
    }

    
}

class NodoCompuesto<T> extends Nodo<T>{
    hijos: Nodo<T>[]=[];
    constructor( valor:T){
        super(valor);
    }

    setagregarhijos( nodo: Nodo<T>){
        this.hijos.push(nodo);
    }

    cumple(p: Predicado<T>): boolean {
        if(!p.cumple(this.valor)){
            return false
        }
        for( let  hijo of this.hijos){
            if( !hijo.cumple(p)){
                return false
            }
        }

       return true;
    }

}
*/







