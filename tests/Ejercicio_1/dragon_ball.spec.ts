import 'mocha';
import 'chai';
import {expect} from 'chai';
import {Dragon_Ball} from '../../src/Ejercicio_1/dragon_ball';
import {Fighter} from '../../src/Ejercicio_1/fighter';

describe('SubClass Dragon Ball test', () => {
  let Vegeta = new Dragon_Ball('Vegeta', 1.5, 70, 500, 250, 1000, 1125,'¡No me vencerás insecto!', 'Big Bag Attack');
  it('Instance of Dragon Ball', () => {
    expect(Vegeta).to.be.instanceOf(Dragon_Ball);
  });

  it('Instance of Fighter', () => {
    expect(Vegeta).to.be.instanceOf(Fighter);
  });

  it('Get and Set Name', () => {
    expect(Vegeta.getName()).to.be.equal('Vegeta');
    Vegeta.setName('Principe Vegeta');
    expect(Vegeta.getName()).to.be.equal('Principe Vegeta');
  });

  it('Get and Set Weight', () => {
    expect(Vegeta.getWeight()).to.be.equal(1.5);
    Vegeta.setWeight(1.65);
    expect(Vegeta.getWeight()).to.be.equal(1.65);
  });

  it('Get and Set Height', () => {
    expect(Vegeta.getHeight()).to.be.equal(70);
    Vegeta.setHeight(80);
    expect(Vegeta.getHeight()).to.be.equal(80);
  });

  it('Get and Set Attack', () => {
    expect(Vegeta.getAttack()).to.be.equal(500);
    Vegeta.setAttack(600);
    expect(Vegeta.getAttack()).to.be.equal(600);
  });

  it('Get and Set Defense', () => {
    expect(Vegeta.getDefense()).to.be.equal(250);
    Vegeta.setDefense(500);
    expect(Vegeta.getDefense()).to.be.equal(500);
  });

  it('Get and Set Speed', () => {
    expect(Vegeta.getSpeed()).to.be.equal(1000);
    Vegeta.setSpeed(1500);
    expect(Vegeta.getSpeed()).to.be.equal(1500);
  });

  it('Get and Set Healt', () => {
    expect(Vegeta.getHealt()).to.be.equal(1125);
    Vegeta.setHealt(2000);
    expect(Vegeta.getHealt()).to.be.equal(2000);
  });

  it('Get and Set Phrase', () => {
    expect(Vegeta.getCatchingPhrase()).to.be.equal('¡No me vencerás insecto!');
    Vegeta.setCatchingPhrase('Principe Vegeta soy yo');
    expect(Vegeta.getCatchingPhrase()).to.be.equal('Principe Vegeta soy yo');
  });

  it('Get and Set Movement', () => {
    expect(Vegeta.getUltimate()).to.be.equal('Big Bag Attack');
    Vegeta.setUltimate('Garlick Attack');
    expect(Vegeta.getUltimate()).to.be.equal('Garlick Attack');
  });
});