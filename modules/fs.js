const fs = require('fs');
const path =  require('path');

// criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) =>{
    if (error){
        //return console.log("Erro: ", error);
    } else {
        console.log('Pasta Criada com Sucesso!');
    }
});


// criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'ola node!', (error) =>{
    if (error){
        return console.log("Erro: ", error);
    } else {
        console.log("Arquivo Criado com Sucesso");
    }
});

// adicionar ao um arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' mais conteudo', (error) =>{
    if (error){
        return console.log("Erro: ", error);
    } else {
        console.log("Arquivo Modificado com Sucesso");
    }
});

// ler aquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) =>{
    if (error){
        return console.log("Erro: ", error);
    } else {
        console.log(data);
    }
});