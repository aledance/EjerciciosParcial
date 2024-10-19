enum Direccion {
    ARRIBA,
    ABAJO,
    IZQUIERDA,
    DERECHA,
    ARRIBA_DERECHA,
    ARRIBA_IZQUIERDA,
    ABAJO_DERECHA,
    ABAJO_IZQUIERDA
}

abstract class Casilla<F, V> {
    protected forma: F;
    protected valor: V | null;
    protected adyacentes: Map<Direccion, Casilla<F, V> | null>;

    constructor(forma: F, valor: V | null = null) {
        this.forma = forma;
        this.valor = valor;
        this.adyacentes = new Map();
    }

    // Método para establecer casillas adyacentes en el tablero
    setAdyacente(direccion: Direccion, casilla: Casilla<F, V> | null): void {
        this.adyacentes.set(direccion, casilla);
    }

    // Devuelve la casilla adyacente en una dirección dada
    getAdyacente(direccion: Direccion): Casilla<F, V> | null {
        return this.adyacentes.get(direccion) || null;
    }

    // Método abstracto: Las subclases deben definir cómo se verifica un "match" entre casillas
    abstract esMatch(valor: V): boolean;

    // Método abstracto: Las subclases deben definir cómo unificar (merge) los valores en un match
    abstract unificarValores(valor: V): V;

    // Coloca un valor en la casilla y verifica si se produce un match
    colocarValor(valor: V): void {
        if (this.valor !== null) {
            throw new Error("Esta casilla ya tiene un valor asignado.");
        }

        this.valor = valor;
        const casillasMatch = this.buscarMatch();

        if (casillasMatch.length >= 3) {
            const nuevoValor = this.unificarValores(valor);
            this.limpiarCasillas(casillasMatch);
            this.valor = nuevoValor;
        }
    }

    // Busca casillas adyacentes con el mismo valor
    protected buscarMatch(): Casilla<F, V>[] {
        const casillasMatch: Casilla<F, V>[] = [this];

        for (const [direccion, adyacente] of this.adyacentes) {
            if (adyacente && adyacente.esMatch(this.valor!)) {
                casillasMatch.push(adyacente);
            }
        }

        return casillasMatch;
    }

    // Limpia las casillas que han hecho match
    protected limpiarCasillas(casillas: Casilla<F, V>[]): void {
        for (const casilla of casillas) {
            casilla.valor = null;
        }
    }

    // Obtener el valor actual de la casilla
    getValor(): V | null {
        return this.valor;
    }
}
