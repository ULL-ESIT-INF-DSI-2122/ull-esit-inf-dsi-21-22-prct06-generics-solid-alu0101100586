import 'mocha';
import {expect} from 'chai';
import {Dragon_Ball} from '../../src/Ejercicio_1/dragon_ball';
import {Elden_Ring} from '../../src/Ejercicio_1/elden_ring';
import {Combat} from '../../src/Ejercicio_1/combat';

describe('Class Combat Test', () => {
  let Godfrey = new Elden_Ring('Godfrey', 3, 150, 5000, 1500, 500, 3000,'Soy El primer semidios', 'Gran Runa de Godfrey');
  let Vegeta = new Dragon_Ball('Vegeta', 1.5, 70, 500, 250, 1000, 1125,'¡No me vencerás insecto!', 'Big Bag Attack');
  let G_vs_V = new Combat(Godfrey, Vegeta);

  it('Methyod Speed', () => {
    expect(G_vs_V.speed()).to.be.equal(false);
  });

  it('Method Power', () => {
    expect(G_vs_V.power(Godfrey, Vegeta, 1)).to.be.equal(500);
    expect(G_vs_V.power(Godfrey, Vegeta, 2)).to.be.equal(1000);
    expect(G_vs_V.power(Godfrey, Vegeta, 3)).to.be.equal(2000);
  });

  it('Method Start, Combat and Damage', () => {
    expect(G_vs_V.start()).to.be.equal('Godfrey');
  });
});
