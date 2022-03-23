import 'mocha';
import 'chai';
import {expect} from 'chai';
import {Marvel} from '../../src/Ejercicio_1/marvel';
import {Fighter} from '../../src/Ejercicio_1/fighter';

describe('SubClass Marvel test', () => {
  let IronMan = new Marvel('IronMan', 1.5, 70, 500, 250, 1000, 1125, 'Yo soy IRONMAN', 'Mark23');
  it('Instance of Marvel Ball', () => {
    expect(IronMan).to.be.instanceOf(Marvel);
  });

  it('Instance of Fighter', () => {
    expect(IronMan).to.be.instanceOf(Fighter);
  });

  it('Get and Set Name', () => {
    expect(IronMan.getName()).to.be.equal('IronMan');
    IronMan.setName('Hombre Ferreo');
    expect(IronMan.getName()).to.be.equal('Hombre Ferreo');
  });

  it('Get and Set Weight', () => {
    expect(IronMan.getWeight()).to.be.equal(1.5);
    IronMan.setWeight(1.65);
    expect(IronMan.getWeight()).to.be.equal(1.65);
  });

  it('Get and Set Height', () => {
    expect(IronMan.getHeight()).to.be.equal(70);
    IronMan.setHeight(80);
    expect(IronMan.getHeight()).to.be.equal(80);
  });

  it('Get and Set Attack', () => {
    expect(IronMan.getAttack()).to.be.equal(500);
    IronMan.setAttack(600);
    expect(IronMan.getAttack()).to.be.equal(600);
  });

  it('Get and Set Defense', () => {
    expect(IronMan.getDefense()).to.be.equal(250);
    IronMan.setDefense(500);
    expect(IronMan.getDefense()).to.be.equal(500);
  });

  it('Get and Set Speed', () => {
    expect(IronMan.getSpeed()).to.be.equal(1000);
    IronMan.setSpeed(1500);
    expect(IronMan.getSpeed()).to.be.equal(1500);
  });

  it('Get and Set Healt', () => {
    expect(IronMan.getHealt()).to.be.equal(1125);
    IronMan.setHealt(2000);
    expect(IronMan.getHealt()).to.be.equal(2000);
  });

  it('Get and Set Phrase', () => {
    expect(IronMan.getCatchingPhrase()).to.be.equal('Yo soy IRONMAN');
    IronMan.setCatchingPhrase('I love you 3000');
    expect(IronMan.getCatchingPhrase()).to.be.equal('I love you 3000');
  });

  it('Get and Set Weapon', () => {
    expect(IronMan.getWeapon()).to.be.equal('Mark23');
    IronMan.setWeapon('Mark45');
    expect(IronMan.getWeapon()).to.be.equal('Mark45');
  });
});