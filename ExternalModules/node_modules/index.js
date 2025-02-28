const minimist = require("minimist")   

//comando para rodar no terminal:  node index.js --nome=gabriel --profissao=desenvolvedor


const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args["nome"]
const profissao = args["profissao"]


console.log(nome, profissao)