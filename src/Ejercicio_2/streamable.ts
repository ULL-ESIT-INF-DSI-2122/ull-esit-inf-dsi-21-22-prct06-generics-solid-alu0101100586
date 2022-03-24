/**
 * Interfez genérica Streamable que especifica métodos para una colección de emisiones
 * basadas en el stream.
 */
export interface Streamable <T extends string> {
  /**
   * Retorna la coleccion de elementos en emision
   */
  getCollection(): T[];

  setCollection(new_collection: T[]): void;

  /**
   * Devuelve los elementos de la colección que encajan con la busqueda introducida
   * @param search_text elemento de busqueda
   */
  searchInCollection(search_text: string): T[];

  /**
   * Añade un elemento a la colleción
   * @param new_show nuevo elemento de la coleccion
   */
  addToCollection(new_show: T): void;

  /**
   * Elimina un elemento de la colección
   * @param old_show elemento a eliminar
   */
  deleteFromCollection(old_show: T): void;
}