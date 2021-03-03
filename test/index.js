"use-strict";

const expect = require('chai').expect;
const Country = require("../");

describe('contrily', () => {

    it('should get all the countries', done => {
        const countries = Country.all();
        expect(countries).to.be.an('array');
        expect(countries.length).to.equal(251);
        done();
    });
    
    it('should get all the countries shortnames', done => {
        const shortnames = Country.shortnamesofall();
        expect(shortnames).to.be.an('array');
        expect(shortnames.length).to.equal(251);
        expect(shortnames[0]).to.be.a("string");
        expect(shortnames[0].length).to.equal(2);
        done();
    });

    it('should get a selected country', done => {
        const country = new Country("NG");
        expect(country).to.be.an('object');
        done();
    });

    it('should get a selected countries states', done => {
        const country = new Country("NG");
        const states = country.states();
        expect(states).to.be.an('array');
        done();
    });

    it('should get a lean, single structure if array', done => {
        const lean = Country.lean('name');
        expect(lean).to.be.an('array');
        expect(lean[0]).to.be.a('string');
        done();
    });
});