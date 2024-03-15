// read-file.js
const fs = require('fs');

// Créer le fichier welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

// Lire le fichier welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File data:', data);
});
