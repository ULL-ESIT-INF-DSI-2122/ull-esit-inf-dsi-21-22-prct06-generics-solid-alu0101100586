import { BasicStreamableCollection } from "./basic_streamable_collection";

/**
 * Subclase de nombre Documental, que extiende la funcionalidad de la superclase 
 * BasicStreamableCollection
 */
export class Documental extends BasicStreamableCollection<string> {
  private type: string;

  /**
   * Constructor de la clase Documental
   * @param documental_collection array de string 
   * @param type tipo de documentales
   */
  constructor(private documental_collection: string[], type: string) {
    super(documental_collection);
    this.type = type;
  }

  /**
   * Retorna el tipo de los Documentales
   * @returns number
   */
  getType(): string {
    return this.type;
  }

  /**
   * Modifica tipo de los Documentales
   * @param new_type nuevo valor del año
   */
  setType(new_type: string) {
    this.type = new_type;
  }

  /**
   * Retorna los Documentales que encajan con la busqueda
   * @param search_text elemento de busqueda
   * @returns string[]
   */
  searchInCollection(search_text: string): string[] {
    let aux: string[] = [];
    let regexp = new RegExp(search_text);
    this.documental_collection.forEach((item) => {
      if(regexp.test(item)) {
        aux.push(item);
      }
    });
    return aux;
  }

  /**
   * Añade un elemto a los Documentales
   * @param new_show elemento a añadir
   */
  addToCollection(new_show: string): void {
    this.getCollection().push(new_show);
  }

  /**
   * Elimina elementos que coincide con el parametro
   * @param old_show elemento a eliminar
   */
  deleteFromCollection(old_show: string): void {
    this.getCollection().forEach((serie, index) => {
      if(serie == old_show) {
        this.getCollection().splice(index, 1);
      }
    });
  }
}