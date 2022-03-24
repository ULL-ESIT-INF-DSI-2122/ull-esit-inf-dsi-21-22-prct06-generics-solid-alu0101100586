import { Streamable } from "./streamable";

/**
 * Clase abstracta generia que implementa la interfaz Streamable
 */
export abstract class BasicStreamableCollection<T extends string> implements Streamable<T>{
  /**
   * Constructor de la clase a la que le pasamos una coleccion de tipo T[]
   * @param collection T[]
   */
  constructor(protected collection: T[]) { }

  /**
   * Retorna la coleccion
   * @returns T[]
   */
  getCollection(): T[] {
    return this.collection;
  }

  /**
   * Modifica la coleccion de la clase
   * @param new_collection nueva coleccion
   */
  setCollection(new_collection: T[]): void {
    this.collection = new_collection;
  }

  /**
   * Método de busqueda dentro de la collecion dado
   * @param search_text termino de busqueda
   */
  abstract searchInCollection(search_text: string): T[];

  /**
   * Añade elementos a la coleccion
   * @param new_show nuevo elemento a añadir
   */
  abstract addToCollection(new_show: T): void;

  /**
   * elimina un elemto de la colección
   * @param old_show 
   */
  abstract deleteFromCollection(old_show: T): void;
} 