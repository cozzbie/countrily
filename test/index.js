"use-strict";

var expect = require('chai').expect;
var Country = require("../");

describe('contrily', function () {

    it('should get all the countries', function (done) {
        var countries = Country.all();
        expect(countries).to.be.an('array');
        expect(countries.length).to.equal(251);
        done();
    });
    
    it('should get all the countries shortnames', function (done) {
        var shortnames = Country.shortnamesofall();
        expect(shortnames).to.be.an('array');
        expect(shortnames.length).to.equal(251);
        expect(shortnames[0]).to.be.a("string");
        expect(shortnames[0].length).to.equal(2);
        done();
    });

    it('should get a selected country', function (done) {
        var country = new Country("NG");
        expect(country).to.be.an('object');
        done();
    });

    it('should get a selected countries states', function (done) {
        var country = new Country("NG");
        var states = country.states();
        expect(states).to.be.an('array');
        done();
    });
});