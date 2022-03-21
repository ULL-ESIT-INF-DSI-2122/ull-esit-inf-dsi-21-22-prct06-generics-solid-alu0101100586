import 'mocha';
import 'chai';
import { expect } from 'chai';
import {PrintaleCollection} from "../../src/PE_102/printable_collection";
import {NumericPrintableCollection} from "../../src/PE_102/numeric_printable_collection";

describe('SubClass NumerricPrintableCollection Tests', () => {
    let number_collection = new NumericPrintableCollection([1, 2, 3, 4, 5]);

    it('Number_collection is an instance of NumericPrintableCollection', () => {
        expect(number_collection).to.be.instanceOf(NumericPrintableCollection);
    });


    it('Number_collection is an instance of PrintableCollection', () => {
        expect(number_collection).to.be.instanceOf(PrintaleCollection);
    });

    it('Number_collection use of addtem', () => {
        number_collection.addItem(6);
        expect(number_collection.getNumberOfItems()).to.be.equal(6);
    });

    it('Number_collection use of removeItem', () => {
        number_collection.removeItem(6);
        expect(number_collection.getNumberOfItems()).to.be.equal(5);
    });

    it('Number_collection use of print', () => {
        expect(number_collection.print()).to.be.equal('1, 2, 3, 4, 5');
    });
});