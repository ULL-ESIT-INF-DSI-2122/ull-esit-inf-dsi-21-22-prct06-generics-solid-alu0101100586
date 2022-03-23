import 'mocha';
import 'chai';
import {expect} from 'chai';
import {Pokemon} from '../../src/Ejercicio_1/pokemon';
import {Fighter} from '../../src/Ejercicio_1/fighter';

describe('SubClass Pokemon test', () => {
  let Pikachu = new Pokemon('Pikachu', 1.5, 70, 500, 250, 1000, 1125,'Pika Pika', 'Electrico');
  it('Instance of Pokemon', () => {
    expect(Pikachu).to.be.instanceOf(Pokemon);
  });

  it('Instance of Fighter', () => {
    expect(Pikachu).to.be.instanceOf(Fighter);
  });

  it('Get and Set Name', () => {
    expect(Pikachu.getName()).to.be.equal('Pikachu');
    Pikachu.setName('Raichu');
    expect(Pikachu.getName()).to.be.equal('Raichu');
  });

  it('Get and Set Weight', () => {
    expect(Pikachu.getWeight()).to.be.equal(1.5);
    Pikachu.setWeight(1.65);
    expect(Pikachu.getWeight()).to.be.equal(1.65);
  });

  it('Get and Set Height', () => {
    expect(Pikachu.getHeight()).to.be.equal(70);
    Pikachu.setHeight(80);
    expect(Pikachu.getHeight()).to.be.equal(80);
  });

  it('Get and Set Attack', () => {
    expect(Pikachu.getAttack()).to.be.equal(500);
    Pikachu.setAttack(600);
    expect(Pikachu.getAttack()).to.be.equal(600);
  });

  it('Get and Set Defense', () => {
    expect(Pikachu.getDefense()).to.be.equal(250);
    Pikachu.setDefense(500);
    expect(Pikachu.getDefense()).to.be.equal(500);
  });

  it('Get and Set Speed', () => {
    expect(Pikachu.getSpeed()).to.be.equal(1000);
    Pikachu.setSpeed(1500);
    expect(Pikachu.getSpeed()).to.be.equal(1500);
  });

  it('Get and Set Healt', () => {
    expect(Pikachu.getHealt()).to.be.equal(1125);
    Pikachu.setHealt(2000);
    expect(Pikachu.getHealt()).to.be.equal(2000);
  });

  it('Get and Set Phrase', () => {
    expect(Pikachu.getCatchingPhrase()).to.be.equal('Pika Pika');
    Pikachu.setCatchingPhrase('Pika Pika Chu');
    expect(Pikachu.getCatchingPhrase()).to.be.equal('Pika Pika Chu');
  });

  it('Get and Set Type', () => {
    expect(Pikachu.getType()).to.be.equal('Electrico');
    Pikachu.setType('planta');
    expect(Pikachu.getType()).to.be.equal('planta');
  });
});