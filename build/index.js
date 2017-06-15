var fs = require("fs"),
    path = require('path'),
    glob = require('glob'),
    directoryfiles = glob.sync("/data/*.json", { root: "."}),
    _ = require('lodash'),
    fileList = _.map(directoryfiles, function (v) {
        return fs.readFileSync(path.resolve(v));
    });

fs.writeFile("./build/data.json", "[" + fileList + "]", function (err) {
    if (err) return console.log(err);
});
