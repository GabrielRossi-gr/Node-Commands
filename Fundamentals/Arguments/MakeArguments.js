// criando argumentos no terminal    
// comando para rodar no terminal: node MakeArguments.js nome=Gabriel idade=21



// esse comando roda o programa e cria um argumento
// node main.js nome=Gabriel


console.log(process.argv)


// o programa vai printar um array contendo o executavel node, o 
// arquivo que esta executando e o meu argumento

// [
//     '/Users/gabrielrossi/.nvm/versions/node/v23.1.0/bin/node',
//     '/Users/gabrielrossi/Projects/Node-exercises/Arguments/main.js',
//     'nome=Gabriel'
// ]


//pegando os argumentos apartir do segundo eleemnto do array
const args = process.argv.slice(2)
console.log(args)


//pega a string do argumento nome apartir do '='
const nome = args[0].split("=")[1]
console.log(nome)


//pega a string do argumento nome apartir do '='
const idade = args[1].split("=")[1]
console.log(idade)


//criarndo uma string apartir dos valores
console.log(`\n    Meu nome é ${nome} e tenho ${idade} anos de idade. \n`)