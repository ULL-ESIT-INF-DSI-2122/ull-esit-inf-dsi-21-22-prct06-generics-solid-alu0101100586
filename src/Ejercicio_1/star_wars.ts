import {Fighter} from "./fighter";

/**
 * Subclase de nombre Star_Wars que extiende la funcionalidad de la clase Fighter
 */
export class Star_Wars extends Fighter {
  protected laser_sword: string;

  /**
   * Constructor de la subclase Marvel
   * @param name nombre del jedi/sith
   * @param weight pero del jedi/sith
   * @param height altura del jedi/sith
   * @param attack ataque del jedi/sith
   * @param defense defensa del jedi/sith
   * @param speed velocidad del jedi/sith
   * @param healt vida del hero
   * @param catching_phrase frase mitica del jedi/sith
   * @param item arma del jedi/sith
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed: number,
              protected healt: number, protected catching_phrase: string, item: string){
    super(name, weight, height, attack, defense, speed, healt, catching_phrase);
    this.laser_sword = item;
  }

  /**
   * Retorna el nombre del jedi/sith
   * @returns string
   */
  getName(): string {
    return this.name;
  }

  /**
   * Retorna el peso del jedi/sith
   * @returns number
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Retorna la altura del jedi/sith
   * @returns number
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Retorna el ataque del jedi/sith
   * @returns number
   */
  getAttack(): number {
    return this.attack;
  }
  
  /**
   * Retorna la defensa del jedi/sith
   * @returns number
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * Retorna la velocidad del jedi/sith
   * @returns number
   */
  getSpeed(): number {
    return this.speed;
  }
  
  /**
   * Retorna la vida del jedi/sith
   * @returns number
   */
  getHealt(): number {
    return this.healt;
  }

  /**
   * Retorna la frase del jedi/sith
   * @returns string
   */
  getCatchingPhrase(): string {
    return this.catching_phrase;
  }

  /**
   * Retorna el arma del jedi/sith
   * @returns string
   */
  getLaserSword(): string {
    return this.laser_sword;
  }

  /**
   * Modifica el nombre del jedi/sith
   * @param new_name 
   */
  setName(new_name: string): void {
    this.name = new_name;
  }

  /**
   * Modifica el peso del jedi/sith
   * @param new_weight 
   */
  setWeight(new_weight: number): void {
    this.weight = new_weight;
  }

  /**
   * modifica la altura del jedi/sith
   * @param new_height 
   */
  setHeight(new_height: number): void {
    this.height = new_height;
  }

  /**
   * Modifica el ataque del jedi/sith
   * @param new_attack 
   */
  setAttack(new_attack: number): void {
    this.attack = new_attack;
  }

  /**
   * Modifica la defensa del jedi/sith
   * @param new_defense 
   */
  setDefense(new_defense: number): void {
    this.defense = new_defense;
  }

  /**
   * Modifica la velocidad del jedi/sith
   * @param new_speed 
   */
  setSpeed(new_speed: number): void {
    this.speed = new_speed
  }

  /**
   * Modifica la vida del jedi/sith
   * @param new_healt 
   */
  setHealt(new_healt: number): void {
    this.healt = new_healt;
  }
  
  /**
   * Modifica la frase mitica del jedi/sith
   * @param new_phrase 
   */
  setCatchingPhrase(new_phrase: string): void {
    this.catching_phrase = new_phrase;
  }

  /**
   * Modifica el arma del jedi/sith
   * @param new_sword 
   */
  setLaserSword(new_sword: string): void {
    this.laser_sword = new_sword;
  }
}