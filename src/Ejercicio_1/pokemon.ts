import {Fighter} from "./fighter";

/**
 * Subclase de nombre Pokemon que extiende la funcionalidad de la clase Fighter
 */
export class Pokemon extends Fighter {
  protected type: string;

  /**
   * Constructor de la subclase Marvel
   * @param name nombre del pokemon
   * @param weight pero del pokemon
   * @param height altura del pokemon
   * @param attack ataque del pokemon
   * @param defense defensa del pokemon
   * @param speed velocidad del pokemon
   * @param healt vida del hero
   * @param catching_phrase frase mitica del pokemon
   * @param type tipo del pokemon
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed: number,
              protected healt: number, protected catching_phrase: string, type: string){
    super(name, weight, height, attack, defense, speed, healt, catching_phrase);
    this.type = type;
  }

  /**
   * Retorna el nombre del pokemon
   * @returns string
   */
  getName(): string {
    return this.name;
  }

  /**
   * Retorna el peso del pokemon
   * @returns number
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Retorna la altura del pokemon
   * @returns number
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Retorna el ataque del pokemon
   * @returns number
   */
  getAttack(): number {
    return this.attack;
  }
  
  /**
   * Retorna la defensa del pokemon
   * @returns number
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * Retorna la velocidad del pokemon
   * @returns number
   */
  getSpeed(): number {
    return this.speed;
  }
  
  /**
   * Retorna la vida del pokemon
   * @returns number
   */
  getHealt(): number {
    return this.healt;
  }

  /**
   * Retorna la frase del pokemon
   * @returns string
   */
  getCatchingPhrase(): string {
    return this.catching_phrase;
  }

  /**
   * Retorna el tipo del pokemon
   * @returns string
   */
  getType(): string {
    return this.type;
  }

  /**
   * Modifica el nombre del pokemon
   * @param new_name 
   */
  setName(new_name: string): void {
    this.name = new_name;
  }

  /**
   * Modifica el peso del pokemon
   * @param new_weight 
   */
  setWeight(new_weight: number): void {
    this.weight = new_weight;
  }

  /**
   * modifica la altura del pokemon
   * @param new_height 
   */
  setHeight(new_height: number): void {
    this.height = new_height;
  }

  /**
   * Modifica el ataque del pokemon
   * @param new_attack 
   */
  setAttack(new_attack: number): void {
    this.attack = new_attack;
  }

  /**
   * Modifica la defensa del pokemon
   * @param new_defense 
   */
  setDefense(new_defense: number): void {
    this.defense = new_defense;
  }

  /**
   * Modifica la velocidad del pokemon
   * @param new_speed 
   */
  setSpeed(new_speed: number): void {
    this.speed = new_speed
  }

  /**
   * Modifica la vida del pokemon
   * @param new_healt 
   */
  setHealt(new_healt: number): void {
    this.healt = new_healt;
  }
  
  /**
   * Modifica la frase mitica del pokemon
   * @param new_phrase 
   */
  setCatchingPhrase(new_phrase: string): void {
    this.catching_phrase = new_phrase;
  }

  /**
   * Modifica el tipo del pokemon
   * @param new_type
   */
  setType(new_type: string): void {
    this.type = new_type;
  }
}