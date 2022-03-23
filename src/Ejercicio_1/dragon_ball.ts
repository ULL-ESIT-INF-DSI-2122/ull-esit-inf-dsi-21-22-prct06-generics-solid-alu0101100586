import {Fighter} from "./fighter";

/**
 * Subclase de nombre Dragon_Ball que extiende la funcionalidad de la clase Fighter
 */
export class Dragon_Ball extends Fighter {
  protected ultimate: string;

  /**
   * Constructor de la subclase Marvel
   * @param name nombre del luchador Z
   * @param weight pero del luchador Z
   * @param height altura del luchador Z
   * @param attack ataque del luchador Z
   * @param defense defensa del luchador Z
   * @param speed velocidad del luchador Z
   * @param healt vida del hero
   * @param catching_phrase frase mitica del luchador Z
   * @param movement movimiento especial del luchador Z
   */
  constructor(protected name: string, protected weight: number, protected height: number,
              protected attack: number, protected defense: number, protected speed: number,
              protected healt: number, protected catching_phrase: string, movement: string){
    super(name, weight, height, attack, defense, speed, healt, catching_phrase);
    this.ultimate = movement;
  }

  /**
   * Retorna el nombre del luchador Z
   * @returns string
   */
  getName(): string {
    return this.name;
  }

  /**
   * Retorna el peso del luchador Z
   * @returns number
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Retorna la altura del luchador Z
   * @returns number
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Retorna el ataque del luchador Z
   * @returns number
   */
  getAttack(): number {
    return this.attack;
  }
  
  /**
   * Retorna la defensa del luchador Z
   * @returns number
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * Retorna la velocidad del luchador Z
   * @returns number
   */
  getSpeed(): number {
    return this.speed;
  }
  
  /**
   * Retorna la vida del luchador Z
   * @returns number
   */
  getHealt(): number {
    return this.healt;
  }

  /**
   * Retorna la frase del luchador Z
   * @returns string
   */
  getCatchingPhrase(): string {
    return this.catching_phrase;
  }

  /**
   * Retorna el movimiento especial del luchador Z
   * @returns string
   */
  getUltimate(): string {
    return this.ultimate;
  }

  /**
   * Modifica el nombre del luchador Z
   * @param new_name 
   */
  setName(new_name: string): void {
    this.name = new_name;
  }

  /**
   * Modifica el peso del luchador Z
   * @param new_weight 
   */
  setWeight(new_weight: number): void {
    this.weight = new_weight;
  }

  /**
   * modifica la altura del luchador Z
   * @param new_height 
   */
  setHeight(new_height: number): void {
    this.height = new_height;
  }

  /**
   * Modifica el ataque del luchador Z
   * @param new_attack 
   */
  setAttack(new_attack: number): void {
    this.attack = new_attack;
  }

  /**
   * Modifica la defensa del luchador Z
   * @param new_defense 
   */
  setDefense(new_defense: number): void {
    this.defense = new_defense;
  }

  /**
   * Modifica la velocidad del luchador Z
   * @param new_speed 
   */
  setSpeed(new_speed: number): void {
    this.speed = new_speed
  }

  /**
   * Modifica la vida del luchador Z
   * @param new_healt 
   */
  setHealt(new_healt: number): void {
    this.healt = new_healt;
  }
  
  /**
   * Modifica la frase mitica del luchador Z
   * @param new_phrase 
   */
  setCatchingPhrase(new_phrase: string): void {
    this.catching_phrase = new_phrase;
  }

  /**
   * Modifica el movimiento especial del luchador Z
   * @param new_ultimate 
   */
  setUltimate(new_ultimate: string): void {
    this.ultimate = new_ultimate;
  }
}