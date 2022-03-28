/**
 * Clase  que utiliza el patron de diseño creacional Singelton para calcular los numeros primos
 */
export class PrimeNumber implements Iterable<number>{
    private items: Set<number>;

    private static primenumber: PrimeNumber;

    /**
     * Constructor privado de la clase PrimeNumber que inicializa el unico atributo de la misma
     */
    private constructor() {
        this.items = new Set<number>();
    }

    /**
     * Método que devuelve la unica instancia de la clase y si no esta creada la crea haciendo uso del new
     */
    public static getPrimeNumber(): PrimeNumber{
        if(!PrimeNumber.primenumber) {
            PrimeNumber.primenumber = new PrimeNumber();
        }
        return PrimeNumber.primenumber
    }

    /**
     * Retorna el array items que almacena lso numeros primos
     */
    getItems() {
        return PrimeNumber.primenumber.items;
    }

    /**
     * Añade elementos al atributo de la clase
     * @param item elemento a añadir
     */
    addItems(item: number) {
        PrimeNumber.primenumber.items.add(item);
    }

    /**
     * Calcula los n primeros numeros primos y los añade en items
     * @param n 
     */
    NPrimes(n: number) {
        let count: number = 0;
        let i: number = 2;
        while(count != n) {
            if(PrimeNumber.primenumber.itsPrime(i)) {
                PrimeNumber.primenumber.addItems(i);
                count++;
            }
            i++;
        }
    }

    /**
     * Calcula los numeros primos dentro del rango [n, m]
     * @param n primer elemento del rango
     * @param m segndo elemento del rango
     */
    NMPrimes(n: number, m: number) {
        for(let i = n; i <= m; i++) {
            if(PrimeNumber.primenumber.itsPrime(i)) {
                PrimeNumber.primenumber.addItems(i);
            }
        }
    }

    /**
     * Funcion que comprueba que un numero dado es primo
     * @param numb numero a comprobar
     */
    itsPrime(numb: number): boolean {
        for(let i = 2; i < numb; i++) {
            if(numb % i == 0) {
                return false;
            }
        }
        return numb !== 1;
    }

    /**
     * Metodo que limpia los items almacenados en el atributo de la clase
     */
    clear() {
        PrimeNumber.primenumber.items.clear;
    }

    [Symbol.iterator](): Iterator<number> {
        return this.items.values();
    }
}
const test = PrimeNumber.getPrimeNumber();
test.NPrimes(5);
console.log([...test.getItems()]);