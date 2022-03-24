import 'mocha';
import { expect } from 'chai';
import { Series } from '../../src/Ejercicio_2/series';
import { BasicStreamableCollection } from '../../src/Ejercicio_2/basic_streamable_collection';

describe('Class Series Test', () => {
  let serie_test = new Series(['Desencanto', 'Final Space', 'The Rookie', 'Paradice PD'], 2018);
  it('Instance of Series', () => {
    expect(serie_test).to.be.instanceOf(Series);
  });

  it('Instance of BasicStreamable', () => {
    expect(serie_test).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Get And Set Collection tests', () => {
    expect(serie_test.getCollection()).to.be.eql(['Desencanto', 'Final Space', 'The Rookie', 'Paradice PD']);
    serie_test.setCollection(['Brooklyn 99', 'The Mandalorian']);
    expect(serie_test.getCollection()).to.be.eql(['Brooklyn 99', 'The Mandalorian']);
    serie_test.setCollection(['Desencanto', 'Final Space', 'The Rookie', 'Paradice PD']);
  });

  it('Get And Set Year tests', () => {
    expect(serie_test.getYear()).to.be.equal(2018);
    serie_test.setYear(2019);
    expect(serie_test.getYear()).to.be.equal(2019);
  });

  it('Search In Collection Test', () => {
    expect(serie_test.searchInCollection('Space')).to.be.eql(['Final Space']);
  });

  it('Add To Collection test', () => {
    serie_test.addToCollection('Family Guy');
    expect(serie_test.getCollection().length).to.be.equal(5);
  });

  it('Delete From COllection Test', () => {
    serie_test.deleteFromCollection('Family Guy');
    expect(serie_test.getCollection().length).to.be.equal(4);
  });
});