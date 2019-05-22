import {fixInput, calcDistance} from "./utils";
import {expect} from "chai";
import "mocha";

describe("fixInput", () => {
    it('normal buying works', function () {
        expect(fixInput(1337, 1, 100000, 0, 100000, 100000, 0)).to.be.equal(1337);
    });
    it('no buying more than you can afford', function () {
        expect(fixInput(10000, 5, 100000, 0, 100, 100000, 0)).to.be.equal(20);
    });
    it('no buying more than you can fit', function () {
        expect(fixInput(10000, 1, 100000, 0, 100000, 25, 5)).to.be.equal(20);
    });
    it('no buying more than the planet has', function () {
        expect(fixInput(10000, 1, 20, 0, 100, 100000, 0)).to.be.equal(20);
    });
    it('normal selling works', function () {
        expect(fixInput(-1337, 5, 0, 100000, 100, 100000, 100000)).to.be.equal(-1337);
    });
    it('no selling more than you have', function () {
        expect(fixInput(-100, 1, 0, 20, 100, 100000, 20)).to.be.equal(-20);
    });
    it('uneven numbers rounded', function () {
        expect(fixInput(3.14159265359, 1, 100000, 0, 100, 100000, 0)).to.be.equal(3);
    });
});

describe("calcDistance", () => {
    it('should be 0 if same point', function () {
        expect(calcDistance(42, 1337, 42, 1337)).to.be.equal(0);
    });
});