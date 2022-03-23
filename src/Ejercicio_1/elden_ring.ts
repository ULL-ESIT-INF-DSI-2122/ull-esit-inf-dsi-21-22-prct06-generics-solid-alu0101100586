import {Fighter} from "./fighter";

/**
 * Subclase de nombre Elden_Ring que extiende la funcionalidad de la clase fighter
 */
export class Elden_Ring extends Fighter {
  protected rune: string;

  /**
   * Constructor de la subclase Marvel
   * @param name nombre del sinluz
   * @param weight pero del sinluz
   * @param height altura del sinluz
   * @param attack ataque del sinluz
   * @param defense defensa del sinluz
   * @param speed velocidad del sinluz
   * @param healt vida del hero
   * @param catching_phrase frase mitica del sinluz
   * @param rune gran runa del sinluz
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed: number,
              protected healt: number, protected catching_phrase: string, rune: string){
    super(name, weight, height, attack, defense, speed, healt, catching_phrase);
    this.rune = rune;
  }

  /**
   * Retorna el nombre del sinluz
   * @returns string
   */
  getName(): string {
    return this.name;
  }

  /**
   * Retorna el peso del sinluz
   * @returns number
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Retorna la altura del sinluz
   * @returns number
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Retorna el ataque del sinluz
   * @returns number
   */
  getAttack(): number {
    return this.attack;
  }
  
  /**
   * Retorna la defensa del sinluz
   * @returns number
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * Retorna la velocidad del sinluz
   * @returns number
   */
  getSpeed(): number {
    return this.speed;
  }
  
  /**
   * Retorna la vida del sinluz
   * @returns number
   */
  getHealt(): number {
    return this.healt;
  }

  /**
   * Retorna la frase del sinluz
   * @returns string
   */
  getCatchingPhrase(): string {
    return this.catching_phrase;
  }

  /**
   * Retorna la gran runa del sinluz
   * @returns string
   */
  getRune(): string {
    return this.rune;
  }

  /**
   * Modifica el nombre del sinluz
   * @param new_name 
   */
  setName(new_name: string): void {
    this.name = new_name;
  }

  /**
   * Modifica el peso del sinluz
   * @param new_weight 
   */
  setWeight(new_weight: number): void {
    this.weight = new_weight;
  }

  /**
   * modifica la altura del sinluz
   * @param new_height 
   */
  setHeight(new_height: number): void {
    this.height = new_height;
  }

  /**
   * Modifica el ataque del sinluz
   * @param new_attack 
   */
  setAttack(new_attack: number): void {
    this.attack = new_attack;
  }

  /**
   * Modifica la defensa del sinluz
   * @param new_defense 
   */
  setDefense(new_defense: number): void {
    this.defense = new_defense;
  }

  /**
   * Modifica la velocidad del sinluz
   * @param new_speed 
   */
  setSpeed(new_speed: number): void {
    this.speed = new_speed
  }

  /**
   * Modifica la vida del sinluz
   * @param new_healt 
   */
  setHealt(new_healt: number): void {
    this.healt = new_healt;
  }
  
  /**
   * Modifica la frase mitica del sinluz
   * @param new_phrase 
   */
  setCatchingPhrase(new_phrase: string): void {
    this.catching_phrase = new_phrase;
  }

  /**
   * Modifica la gran runa del sinluz
   * @param new_rune 
   */
  setRune(new_rune: string): void {
    this.rune = new_rune;
  }
}