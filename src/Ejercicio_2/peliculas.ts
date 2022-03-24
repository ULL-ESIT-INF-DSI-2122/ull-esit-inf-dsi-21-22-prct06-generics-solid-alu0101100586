import { BasicStreamableCollection } from "./basic_streamable_collection";

/**
 * Subclase de nombre Peliculas, que extiende la funcionalidad de la superclase 
 * BasicStreamableCollection
 */
export class Peliculas extends BasicStreamableCollection<string> {
  private duration: number;

  /**
   * Constructor de la clase Peliculas
   * @param film_collection array de string 
   * @param duration duracion media de las peliculas agrupadas
   */
  constructor(private film_collection: string[], duration: number) {
    super(film_collection);
    this.duration = duration;
  }

  /**
   * Retorna el año de salida de las Peliculas
   * @returns number
   */
  getDuration(): number {
    return this.duration;
  }

  /**
   * Modifica la duracion de las Peliculas
   * @param new_duration nuevo valor del año
   */
  setDuration(new_duration: number) {
    this.duration = new_duration;
  }

  /**
   * Retorna las Peliculas que encajan con la busqueda
   * @param search_text elemento de busqueda
   * @returns string[]
   */
  searchInCollection(search_text: string): string[] {
    let aux: string[] = [];
    let regexp = new RegExp(search_text);
    this.film_collection.forEach((item) => {
      if(regexp.test(item)) {
        aux.push(item);
      }
    });
    return aux;
  }

  /**
   * Añade un elemto a las Peliculas
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