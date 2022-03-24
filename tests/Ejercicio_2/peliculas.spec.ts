import 'mocha';
import { expect } from 'chai';
import { Peliculas } from '../../src/Ejercicio_2/peliculas';
import { BasicStreamableCollection } from '../../src/Ejercicio_2/basic_streamable_collection';

describe('Class Peliculas Test', () => {
  let film_test = new Peliculas(['Venom', 'Spider-Man', 'Rambo', 'Star Wars Ep 3'], 2.3);
  it('Instance of Peliculas', () => {
    expect(film_test).to.be.instanceOf(Peliculas);
  });

  it('Instance of BasicStreamable', () => {
    expect(film_test).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Get And Set Collection tests', () => {
    expect(film_test.getCollection()).to.be.eql(['Venom', 'Spider-Man', 'Rambo', 'Star Wars Ep 3']);
    film_test.setCollection(['Cyrano', 'Uncharted']);
    expect(film_test.getCollection()).to.be.eql(['Cyrano', 'Uncharted']);
    film_test.setCollection(['Venom', 'Spider-Man', 'Rambo', 'Star Wars Ep 3']);
  });

  it('Get And Set Duration tests', () => {
    expect(film_test.getDuration()).to.be.equal(2.3);
    film_test.setDuration(3.2);
    expect(film_test.getDuration()).to.be.equal(3.2);
  });

  it('Search In Collection Test', () => {
    expect(film_test.searchInCollection('3')).to.be.eql(['Star Wars Ep 3']);
  });

  it('Add To Collection test', () => {
    film_test.addToCollection('Baby Driver');
    expect(film_test.getCollection().length).to.be.equal(5);
  });

  it('Delete From COllection Test', () => {
    film_test.deleteFromCollection('Baby Driver');
    expect(film_test.getCollection().length).to.be.equal(4);
  });
});