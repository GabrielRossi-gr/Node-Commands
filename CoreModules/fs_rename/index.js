const fs = require("fs")


const nomeArquivo = "arquivo.txt"
const novoNomeArquivo = "novoarquivo.txt"

fs.rename(nomeArquivo, novoNomeArquivo, function(err){

    if(err){
        console.log(err)
        return
    }

    console.log(`Arquivo renomeado para: ${novoNomeArquivo}`)
})