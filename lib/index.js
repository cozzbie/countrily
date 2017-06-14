"use strict";

var data = require("../data/")(),
    _ = require("lodash");

var normalizeName = function (name) {
    return _.deburr(name)
        .toLowerCase()
        .replace(/\-/g, " ")
        .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, "")
        .trim();
};

var directory = _.transform(data, function(arr, country, key){
    var addToIndex = function (name) {
        if (name) arr[normalizeName(name)] = key;
    };

    addToIndex(country.name);
    _.each(country.altSpellings, addToIndex);
    _.each(country.translations, addToIndex);
}, []);

var methods = {
    info: null,
    name: "name",
    states: "provinces",
    provinces: "provinces",
    altSpellings: "altSpellings",
    area: "area",
    borders: "borders",
    callingCodes: "callingCodes",
    capital: "capital",
    currencies: "currencies",
    demonym: "demonym",
    flag: "flag",
    geoJSON: "geoJSON",
    ISOcodes: "ISO",
    languages: "languages",
    latlng: "latlng",
    nativeName: "nativeName",
    population: "population",
    region: "region",
    subregion: "subregion",
    timezones: "timezones",
    tld: "tld",
    translations: "translations",
    wiki: "wiki"
};

var Country = class {
    constructor(countryname, type) {
        this.country;

        if (type == "name") this.country = data[directory[normalizeName(countryname)]];
        else if (type == "ISO3") this.country = _.find(data, function (v, k) {  return v.ISO.alpha3 === countryname });
        else this.country = _.find(data, function (v, k) { return v.ISO.alpha2 === countryname });

        _.forOwn(methods, function(v, k){
            this[k] = function () { return this.country[v]; }
        }.bind(this));
    }

    static all() {
        return data;
    }

    static shortnamesofall() {
        return _.map(data, function (v, k) { return v.ISO.alpha2 });
    }
}

module.exports = Country;