import 'mocha';
import {expect} from 'chai';
import {Dragon_Ball} from '../../src/Ejercicio_1/dragon_ball';
import {Elden_Ring} from '../../src/Ejercicio_1/elden_ring';
import {Pokemon} from '../../src/Ejercicio_1/pokemon';
import {Multiverse} from '../../src/Ejercicio_1/multiverse';

describe('Class Multiverse test', () => {
  let Godfrey = new Elden_Ring('Godfrey', 3, 150, 5000, 1500, 500, 3000,'Soy El primer semidios', 'Gran Runa de Godfrey');
  let Pikachu = new Pokemon('Pikachu', 0.6, 10, 65, 65, 50, 300,'Pika Pika', 'Electrico');
  let Vegeta = new Dragon_Ball('Vegeta', 1.5, 70, 500, 250, 1000, 1125,'¡No me vencerás insecto!', 'Big Bag Attack');
  let List = new Multiverse([Godfrey, Pikachu]);

  it('Instance of Multiverse', () => {
    expect(List).to.be.instanceOf(Multiverse);
  });

  it('Get fighter from multiverse', () => {
    expect(List.getFighters()).to.be.eql([Godfrey, Pikachu]);
  });

  it('Selelct fighter from multiverse', () => {
    expect(List.selectFighter('Godfrey')).to.be.eqls(Godfrey);
  });

  it('Add fighter to multiverse', () => {
    List.addFighter(Vegeta);
    expect(List.getFighters()).to.be.eql([Godfrey, Pikachu, Vegeta]);
  });
});
