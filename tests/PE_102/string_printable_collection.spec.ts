import 'mocha';
import 'chai';
import { expect } from 'chai';
import {PrintaleCollection} from "../../src/PE_102/printable_collection";
import {StringPrintableCollection} from "../../src/PE_102/string_printable_collection";

describe('SubClass NumerricPrintableCollection Tests', () => {
    let string_collection = new StringPrintableCollection(['hola', 'mi', 'amigo', 'Juan']);

    it('String_collection is an instance of NumericPrintableCollection', () => {
        expect(string_collection).to.be.instanceOf(StringPrintableCollection);
    });


    it('String_collection is an instance of PrintableCollection', () => {
        expect(string_collection).to.be.instanceOf(PrintaleCollection);
    });

    it('String_collection use of addtem', () => {
        string_collection.addItem('Perez');
        expect(string_collection.getNumberOfItems()).to.be.equal(5);
    });

    it('String_collection use of removeItem', () => {
        string_collection.removeItem('Perez');
        expect(string_collection.getNumberOfItems()).to.be.equal(4);
    });

    it('String_collection use of print', () => {
        expect(string_collection.print()).to.be.equal('hola, mi, amigo, Juan');
    });
});