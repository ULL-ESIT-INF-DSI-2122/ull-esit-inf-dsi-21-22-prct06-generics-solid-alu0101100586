import {Fighter} from "./fighter";

/**
 * Clase Multiverse que almacena todos los luchadores de un multiverso
 */
export class Multiverse {
  /**
   * Constructor de la clase Multiverse
   * @param fighters lista de luchadores
   */
  constructor(protected fighters: Fighter[]) { }

  /**
   * Retorna la lista de luchadores de un multiverso
   * @returns Fighter[]
   */
  getFighters(): Fighter[] {
    return this.fighters;
  }

  /**
   * Retorna un luchador en concreto
   * @param fighter_name 
   * @returns Fighter
   */
  selectFighter(fighter_name: string) {
    for (let i = 0; i < this.fighters.length; i++){
      if (this.fighters[i].getName() == fighter_name){
        return this.fighters[i];
      }
    }
  }

  /**
   * Añade un nuevo luchador a la plantilla del multiverso
   * @param new_fighter 
   */
  addFighter(new_fighter: Fighter): void {
    this.fighters.push(new_fighter);
  }
}