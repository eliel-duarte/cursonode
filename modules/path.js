const path = require('path');

// Basename
console.log(path.basename(__filename));

// Diretorio Atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// criar objeto Path
console.log(path.parse(__filename));

// Juntar cminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'));