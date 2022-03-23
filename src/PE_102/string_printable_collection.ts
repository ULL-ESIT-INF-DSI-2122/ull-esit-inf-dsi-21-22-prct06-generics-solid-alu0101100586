import { PrintaleCollection } from "./printable_collection";

/**
 * Subclase que extiende de la clase abstracta PrintableCollection para elementos de tipo string
 */
export class StringPrintableCollection extends PrintaleCollection<String> {
    /**
     * Constructor de la clase StringPrintableCollection
     * @param items array de elementos de tipo string
     */
    constructor(items: string[]){
        super(items);
    }

    /**
     * Método que modifica una cadena para formatear la informacion de la coleccion numerica
     */
    print(): string {
        let printer: string = '';
        for(let i = 0; i < this.getNumberOfItems() - 1; i++) {
            printer += this.getItem(i);
            printer += ', ';
        }
        printer += this.getItem(this.getNumberOfItems() - 1);
        
        return printer;
    }
}