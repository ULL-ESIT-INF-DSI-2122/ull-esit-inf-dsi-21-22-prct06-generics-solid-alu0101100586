import 'mocha';
import { expect } from 'chai';
import { Cifrado } from '../../src/Ejercicio_3/cifrado';

let alphabet: string[] = 'ABCD'.split('');
let Cesar = new Cifrado('EXAMEN', 3, 'KEY', alphabet);

describe('Class Cifrado Test', () => {
  it('Get And Set D', () => {
    Cesar.setD(4);
    expect(Cesar.getD()).to.be.equal(4);
  });

  it('Get And Set Alphabet', () => {
    Cesar.setAlphabet('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split(''));
    expect(Cesar.getAlphabet()).to.be.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split(''));
  });

  it('Get And Set Key', () => {
    Cesar.setKey('CLAVE');
    expect(Cesar.getKey()).to.be.equal('CLAVE');
  });

  it('Cesar Encryption', () => {
    expect(Cesar.cesarEncryption()).to.be.equal('IBEPIQ');
  });

  it('Cesar Decryption', () => {
    expect(Cesar.cesarDecryption()).to.be.equal('EXAMEN');
  });

  it('Vigenere Encrypton', () => {
    expect(Cesar.vigenereEncryption()).to.be.equal('HJBIJR');
  });

  it('Vigenere Decryption', () => {
    expect(Cesar.vigenereDecryption()).to.be.equal('EXAMEN');
  });
});