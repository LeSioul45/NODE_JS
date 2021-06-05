// Fichier ex010/main3.js
var filename = __filename.replace(__dirname + '/', '').replace('.js', '');
console.log(filename + ' dit: Bonjour!');
msg = 'Bonjour!';
require('./lib/test3.js');
//for (var prop in GLOBAL)
//  console.log(prop + '=' + GLOBAL[prop]);
