import 'mocha';
import { expect } from 'chai';
import { Documental } from '../../src/Ejercicio_2/documentales';
import { BasicStreamableCollection } from '../../src/Ejercicio_2/basic_streamable_collection';

describe('Class Documentales Test', () => {
  let documental_test = new Documental(['Valley Uprising', 'Mountain', 'Under an Artic Sky', 'Meru'], 'Aventura');
  it('Instance of Documental', () => {
    expect(documental_test).to.be.instanceOf(Documental);
  });

  it('Instance of BasicStreamable', () => {
    expect(documental_test).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Get And Set Collection tests', () => {
    expect(documental_test.getCollection()).to.be.eql(['Valley Uprising', 'Mountain', 'Under an Artic Sky', 'Meru']);
    documental_test.setCollection(['The Horn', 'Colombia']);
    expect(documental_test.getCollection()).to.be.eql(['The Horn', 'Colombia']);
    documental_test.setCollection(['Valley Uprising', 'Mountain', 'Under an Artic Sky', 'Meru']);
  });

  it('Get And Set Type tests', () => {
    expect(documental_test.getType()).to.be.equal('Aventura');
    documental_test.setType('Nature');
    expect(documental_test.getType()).to.be.equal('Nature');
  });

  it('Search In Collection Test', () => {
    expect(documental_test.searchInCollection('Sky')).to.be.eql(['Under an Artic Sky']);
  });

  it('Add To Collection test', () => {
    documental_test.addToCollection('Expedition Hapiness');
    expect(documental_test.getCollection().length).to.be.equal(5);
  });

  it('Delete From COllection Test', () => {
    documental_test.deleteFromCollection('Expedition Hapiness');
    expect(documental_test.getCollection().length).to.be.equal(4);
  });
});