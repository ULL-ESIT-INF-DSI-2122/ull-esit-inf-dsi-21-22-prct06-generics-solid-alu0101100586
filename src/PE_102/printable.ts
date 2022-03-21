/**
 * Interface que realiza la impresion por pantalla de los elementos de tipo T
 */
export interface Printable <T> {
    /**
     * Método que imprime por pantalla la informacion de el elemento T
     */
    print(): string;
}