// Fichier ex010/main6.js
var filename = __filename.replace(__dirname + '/', '').replace(/\.js$/, '');
console.log(filename + ' dit: Bonjour!');
msg = 'Bonjour!'; // ou GLOBAL.msg
require('./lib/test6.js');
