class Celda<T>{
    public valor:T;
    constructor(valor:T){
        this.valor=valor;
    }

    reducir(f:(e1:T,e2:T)=>T){
    return this.valor
    }
}

class Caja<T> extends Celda<T>{
    public elementos: Celda<T>[]=[];
    constructor(valor:T){
        super(valor)
    }

    setagregateElementos(celda:Celda<T>){
        return this.elementos.push(celda)
    }

    reducir(f:(e1:T,e2:T)=>T){
         let resultado = this.valor;

         for (let elemento of this.elementos){
            resultado = f(resultado, elemento.valor);
         }

         return resultado;
    }



}