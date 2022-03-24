import { BasicStreamableCollection } from "./basic_streamable_collection";

/**
 * Subclase de nombre Serie, que extiende la funcionalidad de la superclase 
 * BasicStreamableCollection
 */
export class Series extends BasicStreamableCollection<string> {
  private year: number;

  /**
   * Constructor de la clase Series
   * @param series_collection array de string 
   * @param date año de salida de las Series de la coleccion
   */
  constructor(private series_collection: string[], date: number) {
    super(series_collection);
    this.year = date;
  }

  /**
   * Retorna el año de salida de las Series
   * @returns number
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Modifica el año de salida de las Series
   * @param new_year nuevo valor del año
   */
  setYear(new_year: number) {
    this.year = new_year;
  }

  /**
   * Retorna las Series que encajan con la busqueda
   * @param search_text elemento de busqueda
   * @returns string[]
   */
  searchInCollection(search_text: string): string[] {
    let aux: string[] = [];
    let regexp = new RegExp(search_text);
    this.series_collection.forEach((item) => {
      if(regexp.test(item)) {
        aux.push(item);
      }
    });
    return aux;
  }

  /**
   * Añade un elemto a las Series
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