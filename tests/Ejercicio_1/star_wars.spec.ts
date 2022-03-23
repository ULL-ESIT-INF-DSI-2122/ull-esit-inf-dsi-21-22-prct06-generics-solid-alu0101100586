import 'mocha';
import 'chai';
import {expect} from 'chai';
import {Star_Wars} from '../../src/Ejercicio_1/star_wars';
import {Fighter} from '../../src/Ejercicio_1/fighter';

describe('SubClass Star_Wars test', () => {
  let Mandaloriano = new Star_Wars('Mandaloriano', 1.5, 70, 500, 250, 1000, 1125,'No trabajo con robots', 'Espada del Rey Mandaloriano');
  it('Instance of Star_Wars', () => {
    expect(Mandaloriano).to.be.instanceOf(Star_Wars);
  });

  it('Instance of Fighter', () => {
    expect(Mandaloriano).to.be.instanceOf(Fighter);
  });

  it('Get and Set Name', () => {
    expect(Mandaloriano.getName()).to.be.equal('Mandaloriano');
    Mandaloriano.setName('Principe Mandaloriano');
    expect(Mandaloriano.getName()).to.be.equal('Principe Mandaloriano');
  });

  it('Get and Set Weight', () => {
    expect(Mandaloriano.getWeight()).to.be.equal(1.5);
    Mandaloriano.setWeight(1.65);
    expect(Mandaloriano.getWeight()).to.be.equal(1.65);
  });

  it('Get and Set Height', () => {
    expect(Mandaloriano.getHeight()).to.be.equal(70);
    Mandaloriano.setHeight(80);
    expect(Mandaloriano.getHeight()).to.be.equal(80);
  });

  it('Get and Set Attack', () => {
    expect(Mandaloriano.getAttack()).to.be.equal(500);
    Mandaloriano.setAttack(600);
    expect(Mandaloriano.getAttack()).to.be.equal(600);
  });

  it('Get and Set Defense', () => {
    expect(Mandaloriano.getDefense()).to.be.equal(250);
    Mandaloriano.setDefense(500);
    expect(Mandaloriano.getDefense()).to.be.equal(500);
  });

  it('Get and Set Speed', () => {
    expect(Mandaloriano.getSpeed()).to.be.equal(1000);
    Mandaloriano.setSpeed(1500);
    expect(Mandaloriano.getSpeed()).to.be.equal(1500);
  });

  it('Get and Set Healt', () => {
    expect(Mandaloriano.getHealt()).to.be.equal(1125);
    Mandaloriano.setHealt(2000);
    expect(Mandaloriano.getHealt()).to.be.equal(2000);
  });

  it('Get and Set Phrase', () => {
    expect(Mandaloriano.getCatchingPhrase()).to.be.equal('No trabajo con robots');
    Mandaloriano.setCatchingPhrase('No trabajo con bebes');
    expect(Mandaloriano.getCatchingPhrase()).to.be.equal('No trabajo con bebes');
  });

  it('Get and Set Sword', () => {
    expect(Mandaloriano.getLaserSword()).to.be.equal('Espada del Rey Mandaloriano');
    Mandaloriano.setLaserSword('Ninguna');
    expect(Mandaloriano.getLaserSword()).to.be.equal('Ninguna');
  });
});