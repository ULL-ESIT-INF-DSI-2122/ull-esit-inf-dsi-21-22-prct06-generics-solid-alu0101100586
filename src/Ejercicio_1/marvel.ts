import {Fighter} from "./fighter";

/**
 * Subclase de nombre Marvel que extiende la funcionalidad de la clase Fighter
 */
export class Marvel extends Fighter {
  protected weapon: string;

  /**
   * Constructor de la subclase Marvel
   * @param name nombre del heroe
   * @param weight pero del heroe
   * @param height altura del heroe
   * @param attack ataque del heroe
   * @param defense defensa del heroe
   * @param speed velocidad del heroe
   * @param healt vida del hero
   * @param catching_phrase frase mitica del heroe
   * @param item arma del heroe
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed: number,
              protected healt: number, protected catching_phrase: string, item: string){
    super(name, weight, height, attack, defense, speed, healt, catching_phrase);
    this.weapon = item;
  }

  /**
   * Retorna el nombre del heroe
   * @returns string
   */
  getName(): string {
    return this.name;
  }

  /**
   * Retorna el peso del heroe
   * @returns number
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Retorna la altura del heroe
   * @returns number
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Retorna el ataque del heroe
   * @returns number
   */
  getAttack(): number {
    return this.attack;
  }
  
  /**
   * Retorna la defensa del heroe
   * @returns number
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * Retorna la velocidad del heroe
   * @returns number
   */
  getSpeed(): number {
    return this.speed;
  }
  
  /**
   * Retorna la vida del heroe
   * @returns number
   */
  getHealt(): number {
    return this.healt;
  }

  /**
   * Retorna la frase del heroe
   * @returns string
   */
  getCatchingPhrase(): string {
    return this.catching_phrase;
  }

  /**
   * Retorna el arma del heroe
   * @returns string
   */
  getWeapon(): string {
    return this.weapon;
  }

  /**
   * Modifica el nombre del heroe
   * @param new_name 
   */
  setName(new_name: string): void {
    this.name = new_name;
  }

  /**
   * Modifica el peso del heroe
   * @param new_weight 
   */
  setWeight(new_weight: number): void {
    this.weight = new_weight;
  }

  /**
   * modifica la altura del heroe
   * @param new_height 
   */
  setHeight(new_height: number): void {
    this.height = new_height;
  }

  /**
   * Modifica el ataque del heroe
   * @param new_attack 
   */
  setAttack(new_attack: number): void {
    this.attack = new_attack;
  }

  /**
   * Modifica la defensa del heroe
   * @param new_defense 
   */
  setDefense(new_defense: number): void {
    this.defense = new_defense;
  }

  /**
   * Modifica la velocidad del heroe
   * @param new_speed 
   */
  setSpeed(new_speed: number): void {
    this.speed = new_speed
  }

  /**
   * Modifica la vida del heroe
   * @param new_healt 
   */
  setHealt(new_healt: number): void {
    this.healt = new_healt;
  }
  
  /**
   * Modifica la frase mitica del heroe
   * @param new_phrase 
   */
  setCatchingPhrase(new_phrase: string): void {
    this.catching_phrase = new_phrase;
  }

  /**
   * Modifica el arma del heroe
   * @param new_weapon 
   */
  setWeapon(new_weapon: string): void {
    this.weapon = new_weapon;
  }
}