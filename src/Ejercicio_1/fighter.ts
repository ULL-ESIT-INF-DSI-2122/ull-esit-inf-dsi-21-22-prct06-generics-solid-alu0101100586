/**
 * Clase Abstacta que define las cualidades de un luchador así como las funciones que obtienen y modifican
 * esas cualidades
 */
export abstract class Fighter {
  /**
   * Constructor Parametrizado de la clase abstracta Fighter
   * @param name nombre del luchador
   * @param weight peso del luchador
   * @param height altura del luchador
   * @param attack ataque del luchador
   * @param defense defensa del luchador
   * @param speed velocidad del luchador
   * @param healt vida del luchador
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed:number,
              protected healt: number, protected catching_phrase: string) { }
  
  /**
   * Retorna el nombre del luchador
   */
  abstract getName(): string;

  /**
   * Retorna el peso del luchador
   */
  abstract getWeight(): number;

  /**
   * Retorna la altura del luchador
   */
  abstract getHeight(): number;

  /**
   * Retorna el ataque del luchador
   */
  abstract getAttack(): number;

  /**
   * Retorna la defensa del luchador
   */
  abstract getDefense(): number;

  /**
   * Retorna la velocidad del luchador
   */
  abstract getSpeed(): number;

  /**
   * Retorna al vida del luchador
   */
  abstract getHealt(): number;

  /**
   * Retorna la frase mitica del luchador
   */
  abstract getCatchingPhrase(): string;

  /**
   * Modifica el numbre del luchador
   * @param new_name nuevo nombre
   */
  abstract setName(new_name: string): void;

  /**
   * modifica el peso del luchador
   * @param new_weight nuevo peso
   */
  abstract setWeight(new_weight: number): void;

  /**
   * Modifica la altura del luchador
   * @param new_height nueva altura
   */
  abstract setHeight(new_height: number): void;

  /**
   * Modifica el ataque del luchador
   * @param new_attack nuevo ataque
   */
  abstract setAttack(new_attack: number): void;

  /**
   * Modifica la defensa del luchador
   * @param new_defense nueva defensa
   */
  abstract setDefense(new_defense: number): void;

  /**
   * Modifica la velocidad del luchador
   * @param new_speed nueva velocidad
   */
  abstract setSpeed(new_speed: number): void;

  /**
   * Modifica la vida del luchador
   * @param new_healt nueva vida
   */
  abstract setHealt(new_healt: number): void;

  /**
   * Modifica la frase mitica del luchador
   */
  abstract setCatchingPhrase(new_phrase: string): void;
}