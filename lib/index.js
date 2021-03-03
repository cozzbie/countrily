"use strict";

const bulkdata = require("countrily-data");
const _ = require("lodash");

const totalList = [];

_.each(bulkdata, data => {
    data.ISO[2] = data.ISO.alpha2;
    data.ISO[3] = data.ISO.alpha3;
    totalList.push(data);
});

const normalizeName = name => {
    return _.deburr(name)
        .toLowerCase()
        .replace(/\-/g, ' ')
        .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, '')
        .trim();
};

const directory = _.transform(totalList, (arr, country, key) => {
    const addToIndex = name => {
        if (name) arr[normalizeName(name)] = key;
    };

    addToIndex(country.name);
    _.each(country.altSpellings, addToIndex);
    _.each(country.translations, addToIndex);
}, []);

const methods = {
    info: null,
    name: 'name',
    provinces: 'provinces',
    states: 'provinces',
    altSpellings: 'altSpellings',
    area: 'area',
    borders: 'borders',
    callingCodes: 'callingCodes',
    capital: 'capital',
    currencies: 'currencies',
    demonym: 'demonym',
    flag: 'flag',
    geoJSON: 'geoJSON',
    ISOcodes: 'ISO',
    languages: 'languages',
    latlng: 'latlng',
    nativeName: 'nativeName',
    population: 'population',
    region: 'region',
    subregion: 'subregion',
    timezones: 'timezones',
    tld: 'tld',
    translations: 'translations',
    wiki: 'wiki'
};

const Country = class {
    constructor(countryname, type) {
        this.country;

        if (type == "name") this.country = totalList[directory[normalizeName(countryname)]];
        else if (type == "ISO3") this.country = _.find(totalList, (v, k) => v.ISO.alpha3 === countryname);
        else this.country = _.find(totalList, v => v.ISO.alpha2 === countryname);

        _.forOwn(methods, function(v, k) {
            this[k] = () => this.country[v];
        }.bind(this));
    }

    static all() {
        return totalList;
    }

    static lean(field) {
        return totalList.map(list => list[field]).filter(Boolean);
    }

    static shortnamesofall() {
        return _.map(totalList, v => v.ISO.alpha2);
    }
}

module.exports = Country;