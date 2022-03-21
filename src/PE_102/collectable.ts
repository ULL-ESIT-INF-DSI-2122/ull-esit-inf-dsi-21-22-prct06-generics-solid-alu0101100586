/**
 * Interface genérica que nos permite crear un coleccionable de los elementos de tipo T
 */
export interface Collectable<T> {
    /**
     * Añade Un nuevo item al coleccionable
     * @param new_item Nuevo elemento T
     */
    addItem(new_item: T): void;

    /**
     * Retorna el Item que hace match con el termino introducido como argumento
     * @param term Termino a buscar
     */
    getItem(index: number): T;

    /**
     * Elimina un item del coleccionable siempre y cuando haga mactch con el argumento
     * @param term argumento a matchear
     */
    removeItem(term: T): void;

    /**
     * Retorna el numero de elementos que conforman el coleccionable
     */
    getNumberOfItems(): number;
}