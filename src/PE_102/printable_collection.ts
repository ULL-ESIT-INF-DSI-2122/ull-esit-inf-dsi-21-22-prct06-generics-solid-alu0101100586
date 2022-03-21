import {Collectable} from "./collectable"
import {Printable} from "./printable"

/**
 * Class abstracta que implementa las interfaces Collectabla y Printable para crear coleciones que pueden ser impresas
 */
export abstract class PrintaleCollection<T> implements Collectable<T>, Printable<T> {

    /**
     * Constructor por defecto de la clase PrintableCollection
     * @param items Array de elementos T
     */
    constructor(protected items: T[]) {

    }

    /**
     * Añade un Item a la coleccion
     * @param new_item item a añadir
     */
    addItem(new_item: T): void {
        this.items.push(new_item);
    }

    /**
     * Retorna un elemnto de la lista dado un indice
     * @param index indice del elemento a buscar
     * @returns T
     */
    getItem(index: number): T {
        return this.items[index];
    }

    /**
     * Elimina un elemento de la coleccion
     * @param term Elemento a eliminar
     */
    removeItem(term: T): void {
        this.items.forEach((element, index) => {
            if(term == element) {
                this.items.splice(index, 1);
            }
        });
    }

    /**
     * Devuelve el numero de elementos que conforma la coleccion
     * @returns Number
     */
    getNumberOfItems(): number {
        return this.items.length;
    }

    /**
     * Método abstracto, que tendrán que implementar las clases hijas de la clase PrintableCollection para imprimir informacion
     */
    abstract print(): string;
}