interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
    reset(): void;
}
abstract class AbstractCollection<T> {
    // Método plantilla que define el flujo completo de iteración
    public iterateCollection(): void {
        const iterator = this.createIterator(); // Este es el método que las subclases deben definir
        iterator.reset();
        
        while (iterator.hasNext()) {
            const item = iterator.next();
            this.processItem(item); // Método abstracto para que cada subclase procese los items a su manera
        }
    }

    // Método abstracto para crear un iterador
    protected abstract createIterator(): Iterator<T>;

    // Método abstracto para procesar cada item
    protected abstract processItem(item: T): void;
}
