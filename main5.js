// Fichier ex010/main5.js
console.log('main5 dit: Bonjour!');
msg = 'Bonjour!'; // ou GLOBAL.msg
require('./lib/test3.js');
for(var prop in GLOBAL) {
  console.log('GLOBAL.' + prop + '=' + GLOBAL[prop]);
}
