/**
 * Clase que realiza cifrados y descifrados basados en el cifrado Cesar
 */
export class Cifrado{
  protected cod_phrase: string;
  /**
   * Constructor de la clase Cifrado
   * @param phrase string a encryptar
   * @param d desplazamiento de letras
   * @param key clave para encripta/desencriptar
   * @param alphabet alpbaheto sobre el que se basa
   */
  constructor(protected phrase: string, protected d: number, protected key: string,
    protected alphabet: string[]) { 
    phrase.toUpperCase();
    key.toUpperCase();
    alphabet.sort();
    this.cod_phrase = '';
  }
  
  /**
   * Retorna el desplazamiento
   * @returns number
   */
  getD() {
    return this.d;
  }

  /**
   * Retorna el alphabeto utilizado
   * @returns string[]
   */
  getAlphabet() {
    return this.alphabet;
  }

  /**
   * Retorna la clave para cifrar y descrifrar
   * @returns string[]
   */
  getKey() {
    return this.key;
  }

  /**
   * Modifica el desplazamiento
   * @param new_d 
   */
  setD(new_d: number) {
    this.d = new_d;
  }

  /**
   * Modifica el alphabeto
   * @param new_alphabet 
   */
  setAlphabet(new_alphabet: string[]) {
    this.alphabet = new_alphabet;
  }

  /**
   * Modifica la clave
   * @param new_key 
   */
  setKey(new_key: string) {
    this.key = new_key;
    this.key.toUpperCase();
  }
  
  /**
   * Realioza el cifrado Cesar
   * @returns string
   */
  cesarEncryption(): string {
    let aux_index: number;
    let text: string[] = this.phrase.split('');
    this.cod_phrase = '';
    text.forEach((char) =>{
      this.alphabet.forEach((alpha, index) =>{
        if(char == alpha) {
          if((index + this.d) > this.alphabet.length) {
            aux_index = (index + this.d) % this.alphabet.length;
          } else {
            aux_index = index + this.d;
          }
          this.cod_phrase += this.alphabet[aux_index];
        }
      });
    });
    return this.cod_phrase.toUpperCase();
  }

  /**
   * Realiza el descifrado para el cifrado Cesar
   * @returns 
   */
  cesarDecryption(): string {
    let aux_index: number;
    let text: string[] = this.cod_phrase.split('');
    this.phrase = '';
    text.forEach((char) =>{
      this.alphabet.forEach((alpha, index) => {
        if(char == alpha) {
          if((index - this.d) < 0) {
            aux_index = index - this.d + this.alphabet.length;
          } else {
            aux_index = index - this.d;
          }
          this.phrase += this.alphabet[aux_index];
        }
      });
    });
    return this.phrase.toUpperCase();
  }

  /**
   * Pasa la clave de string a string[]
   * @returns string[]
   */
  fillkey(): string[] {
    let aux: string = '';
    for (let char of this.key){
      aux += char;
      if(aux.length == this.phrase.length) {
        break;
      }
    }
    return aux.split('');
  }

  /**
   * Realiza la Extencion del cifrado Cesar
   * @returns 
   */
  vigenereEncryption():string {
    let text: string[] = this.phrase.split('');
    let aux_index: number;
    let aux_d: number;
    let key_text: string[] = this.fillkey();
    this.cod_phrase = '';

    text.forEach((char, index_t) => {
      this.alphabet.forEach((alpha, index_a) => {
        if(char == alpha) {
         aux_index = index_a; 
        }
        if(key_text[index_t] == alpha) {
          aux_d = index_a + 1;
        }
      });
      if((aux_index + aux_d) > this.alphabet.length) {
        aux_index = (aux_index + aux_d) % this.alphabet.length;
      } else {
        aux_index += aux_d;
      }
      this.cod_phrase += this.alphabet[aux_index];
    });

    return this.cod_phrase.toUpperCase();
  }

  /**
   * Realiza el descrifado de la extencion del cifrado cesar
   * @returns 
   */
  vigenereDecryption():string {
    let text: string[] = this.cod_phrase.split('');
    let aux_index: number;
    let aux_d: number;
    let key_text: string[] = this.fillkey();
    this.phrase = '';

    text.forEach((char, index_t) => {
      this.alphabet.forEach((alpha, index_a) => {
        if(char == alpha) {
         aux_index = index_a; 
        }
        if(key_text[index_t] == alpha) {
          aux_d = index_a + 1;
        }
      });
      if((aux_index - aux_d) < 0) {
        aux_index = (aux_index - aux_d) + this.alphabet.length;
      } else {
        aux_index -= aux_d;
      }
      this.phrase += this.alphabet[aux_index];
    });

    return this.phrase.toUpperCase();
  }
}