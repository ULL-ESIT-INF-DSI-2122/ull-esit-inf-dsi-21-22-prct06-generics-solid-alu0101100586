import 'mocha';
import 'chai';
import {expect} from 'chai';
import {Elden_Ring} from '../../src/Ejercicio_1/elden_ring';
import {Fighter} from '../../src/Ejercicio_1/fighter';

describe('SubClass Elden Ring test', () => {
  let Godfrey = new Elden_Ring('Godfrey', 1.5, 70, 500, 250, 1000, 1125,'Soy El primer semidios', 'Gran Runa de Godfrey');
  it('Instance of Elden Ring', () => {
    expect(Godfrey).to.be.instanceOf(Elden_Ring);
  });

  it('Instance of Fighter', () => {
    expect(Godfrey).to.be.instanceOf(Fighter);
  });

  it('Get and Set Name', () => {
    expect(Godfrey.getName()).to.be.equal('Godfrey');
    Godfrey.setName('Principe Godfrey');
    expect(Godfrey.getName()).to.be.equal('Principe Godfrey');
  });

  it('Get and Set Weight', () => {
    expect(Godfrey.getWeight()).to.be.equal(1.5);
    Godfrey.setWeight(1.65);
    expect(Godfrey.getWeight()).to.be.equal(1.65);
  });

  it('Get and Set Height', () => {
    expect(Godfrey.getHeight()).to.be.equal(70);
    Godfrey.setHeight(80);
    expect(Godfrey.getHeight()).to.be.equal(80);
  });

  it('Get and Set Attack', () => {
    expect(Godfrey.getAttack()).to.be.equal(500);
    Godfrey.setAttack(600);
    expect(Godfrey.getAttack()).to.be.equal(600);
  });

  it('Get and Set Defense', () => {
    expect(Godfrey.getDefense()).to.be.equal(250);
    Godfrey.setDefense(500);
    expect(Godfrey.getDefense()).to.be.equal(500);
  });

  it('Get and Set Speed', () => {
    expect(Godfrey.getSpeed()).to.be.equal(1000);
    Godfrey.setSpeed(1500);
    expect(Godfrey.getSpeed()).to.be.equal(1500);
  });

  it('Get and Set Healt', () => {
    expect(Godfrey.getHealt()).to.be.equal(1125);
    Godfrey.setHealt(2000);
    expect(Godfrey.getHealt()).to.be.equal(2000);
  });

  it('Get and Set Phrase', () => {
    expect(Godfrey.getCatchingPhrase()).to.be.equal('Soy El primer semidios');
    Godfrey.setCatchingPhrase('No podras conmigo sinluz');
    expect(Godfrey.getCatchingPhrase()).to.be.equal('No podras conmigo sinluz');
  });

  it('Get and Set Rune', () => {
    expect(Godfrey.getRune()).to.be.equal('Gran Runa de Godfrey');
    Godfrey.setRune('Gran Runa de Rennala');
    expect(Godfrey.getRune()).to.be.equal('Gran Runa de Rennala');
  });
});