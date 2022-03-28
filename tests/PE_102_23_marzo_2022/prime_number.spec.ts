import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../../src/PE_102_23_marzo_2022/primenumber';

const prime_number = PrimeNumber.getPrimeNumber();
const set_prime = new Set<number>();

describe('Class PrimeNumbers test', () => {
    it('Instance of PrimeNumbers', () => {
        expect(prime_number).to.be.instanceOf(PrimeNumber);
    });

    it('First N numbers test', () => {
        prime_number.NPrimes(5);
        set_prime.add(2);
        set_prime.add(3);
        set_prime.add(5);
        set_prime.add(7);
        set_prime.add(11);
        expect(prime_number.getItems()).to.be.eql(set_prime);
    });

    it('[N, M] prime numbers test', () => {
        prime_number.clear();
        prime_number.NMPrimes(3, 17);
        set_prime.add(3);
        set_prime.add(5);
        set_prime.add(7);
        set_prime.add(11);
        set_prime.add(13);
        set_prime.add(17);
        expect(prime_number.getItems()).to.be.eql(set_prime);
    });
});