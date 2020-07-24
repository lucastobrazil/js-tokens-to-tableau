var fs = require('fs');
var convertColors = require('./convert');

var tableauVars = convertColors();

fs.writeFile('./Preferences.xml', tableauVars, function (err) {
    if (err) throw err;
    console.log('tps file created successfully.');
});
