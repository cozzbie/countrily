# countrily

Inspired by the work of the authors of [countryjs](https://github.com/progressclaim/countryjs), this is a Node.js module for returning data about countries but can also be run in the browser unlike the original project. Use this to get a list of countries (country list) and their corresponding meta data

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [API](#api)
  * [`.info()`](#info)
  * [`.states()`](#states)
  * [`.provinces()`](#provinces)
  * [`.name()`](#name)
  * [`.altSpellings()`](#altspellings)
  * [`.area()`](#area)
  * [`.borders()`](#borders)
  * [`.callingCodes()`](#callingcodes)
  * [`.capital()`](#capital)
  * [`.currencies()`](#currencies)
  * [`.demonym()`](#demonym)
  * [`.flag()`](#flag)
  * [`.geoJSON()`](#geojson)
  * [`.ISOcodes()`](#isocodes)
  * [`.languages()`](#languages)
  * [`.latlng()`](#latlng)
  * [`.nativeName()`](#nativename)
  * [`.population()`](#population)
  * [`.region()`](#region)
  * [`.subregion()`](#subregion)
  * [`.timezones()`](#timezones)
  * [`.tld()`](#tld)
  * [`.translations()`](#translations)
  * [`.wiki()`](#wiki)
* [Static methods](#static-methods)
  * [`.all()`](#all)
  * [`.shortnamesofall()`](#shortnamesofall)
* [Disclaimer](#disclaimer)
* [License (ISC)](#license-isc)

## Install

```bash
npm install countrily
```
## Usage

To access one of the country properties available, you'll need to use one of the API methods listed below and pass a country in either way:

- Using the ISO-alpha2 code: `var country = new Country('NG', 'ISO2')` or `var country = new Country('NG')` (defaults)
- Using the ISO-alpha3 code: `var country = new Country('NG', 'ISO3')`
- From this you can just use any of the methods: `country.states()`.

## API

### `.info()`

Returns all available information for a specified country.

```JavaScript
var Countrily = require('countrily');
var nigeria = new Countrily('NGA', 'ISO3'); // 'ISO2', 'ISO3', 'name'
var nigeria = new Countrily('NG');  // Defaults to ISO2
nigeria.info();
// returns object,
// {
//     "name": "Nigeria",
//     "altSpellings": ["NG", "NGA", "Federal Republic of Nigeria"],
//     "area": 923768,
//     "borders": ["BEN","CMR","TCD","NER"],
//     "callingCodes": ["234"],
//     "capital": "Abuja",
//     "currencies": ["NGN"],
//     "demonym": "Nigerian",
//     ...
// }
```

### `.states()`

Returns all states/provinces for a specified country.

```JavaScript
var Countrily = require('countrily');
var nigeria = Countrily('NG', 'ISO2'); // 'ISO2', 'ISO3', 'name'.
var nigeria = Countrily('NG')
nigeria.states();
// returns array of states,
// [
//  "Adamawa",
//  ...
// ]
```

### `.provinces()`

Alias of [`.states()`]()

### `.name()`

Returns name for a specified country

```javascript
var Countrily = require('countrily');
var nigeria = Countrily('NGA', 'ISO3'); // 'ISO2', 'ISO3', 'name'
var nigeria = Countrily('NG'); // Defaults to 'ISO2'
country.name() // Defaults to 'ISO2'
// returns string
// "Nigeria"
```

### `.altSpellings()`

Returns alternate spellings for the name of a specified country

```javascript
nigeria.altSpellings()
// returns array of strings, alternate names
// ["NG","Nijeriya","Naíjíríà","Federal Republic of Nigeria"]
```

### `.area()`

Returns area (km²) for a specified country

```javascript
nigeria.area()
// returns number of square kilometer area
// 923768
```

### `.borders()`

Returns bordering countries (ISO3) for a specified country

```javascript
nigeria.borders() // Defaults to 'ISO2'
// returns array of strings, ISO3 codes of countries that border the given country
// ["BEN","CMR","TCD","NER"]
```

### `.callingCodes()`

Returns international calling codes for a specified country

```javascript
nigeria.callingCodes() // Defaults to 'ISO2'
// returns array of calling code strings
// ["234"]
```

### `.capital()`

Returns capital city for a specified country

```javascript
nigeria.capital()
// returns string
// "Abuja"
```

### `.currencies()`

Returns official currencies for a specified country

```javascript
nigeria.currencies()
// returns array of strings, currencies
// ["NGN"]
```

### `.demonym()`

Returns the [demonyms](http://en.wikipedia.org/wiki/Demonym) for a specified country

```javascript
nigeria.demonym()
// returns string, name of residents
// "Nigerian"
```

### `.flag() - INCOMPLETE`

Returns SVG link of the official flag for a specified country

```javascript
nigeria.flag()
// returns string URL of CC licensed svg flag
```

### `.geoJSON()`

Returns [geoJSON](http://en.wikipedia.org/wiki/GeoJSON) for a specified country

```javascript
nigeria.geoJSON()
// returns object of GeoJSON data
```

### `.ISOcodes()`

Returns ISO codes for a specified country

```javascript
nigeria.ISOcodes()
// returns object of ISO codes
// {
//   "alpha2": "NG",
//   "alpha3": "NGA"
// }
```

### `.languages()`

Returns official languages for a specified country

```javascript
nigeria.languages()
// returns array of language codes
// ["en"]
```

### `.latlng()`

Returns approx latitude and longitude for a specified country

```javascript
nigeia.latlng();
// returns array, approx latitude and longitude for country
// [10,8]
```

### `.nativeName()`

Returns the name of the country in its native tongue

```javascript
nigeria.nativeName();
// returns string, name of country in native language
// "Nigeria"
```

### `.population()`

Returns approximate population for a specified country

```javascript
nigeria.population();
// returns number, approx population
// 178517000
```

### `.region()`

Returns general region for a specified country

```javascript
nigeria.region();
// returns string
// "Africa"
```

### `.subregion()`

Returns a more specific region for a specified country

```javascript
nigeria.subregion();
// returns string
// "West Africa"
```

### `.timezones()`

Returns all timezones for a specified country

```javascript
nigeria.timezones();
// returns array of timezones
```

### `.tld()`

Returns official [top level domains](http://en.wikipedia.org/wiki/Top-level_domain) for a specified country

```javascript
nigeria.tld();
// returns array of top level domains specific to the country
// [".ng"]
```

### `.translations()`

Returns translations for a specified country name in popular languages

```javascript
nigeria.translations();
// returns object of translations of country name in major languages
// {
//   "de": "Nigeria",
//   "es": "Nigeria",
//   "fr": "Nigeria",
//   "ja": "ナイジェリア",
//   "it": "Nigeria"
// }
```

### `.wiki()`

Returns link to wikipedia page for a specified country

```javascript
nigeria.wiki();
// returns string URL of wikipedia article on country
// "http://en.wikipedia.org/wiki/Nigeria"
```

## Static methods

Two static methods are exposed to return all data and shortnames

### `.all()`

Return all country data. This will be super big. Not recommended.

```javascript
var Countrily = require('countrily');
Countrily.all();
// returns array of objects,
// [{
//     "name": "Nigeria",
//     "altSpellings": ["NG", "NGA", "Federal Republic of Nigeria"],
//     "area": 923768,
//     "borders": ["BEN","CMR","TCD","NER"],
//     "callingCodes": ["234"],
//     "capital": "Abuja",
//     "currencies": ["NGN"],
//     "demonym": "Nigerian",
//     ...
// },
// ...]
```

### `.shortnamesofall()`

Return an array of all the shortnames (ISO2) of all the countries.

```javascript
var Countrily = require('countrily');
Countrily.shortnamesofall();
```

## Test

1. Make the changes you desire
2. Ensure all changes have a new test in the `test/` folder, and run:

  ```bash
  npm test
  ```

## Disclaimer

This is being maintained in the contributor's free time, and as such, may contain minor errors in regards to some countries.
Most of the information included in this library is what is listed on Wikipedia. If there is an error, 
please let me know and I will do my best to correct it.

## License (ISC)

Copyright (c) 2017, Timi Aiyemo <cozzbie@gmail.com>

Please see licence file.
