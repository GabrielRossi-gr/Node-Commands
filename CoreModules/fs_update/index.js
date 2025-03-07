const http = require("http")
const fs = require("fs")

const port = 3000

const server = http.createServer((requst, response) => {

    //recebe url decomposta do servidor
    const urlInfo = require("url").parse(requst.url, true)
    
    //recebe a propriedade 'name' da url
    const name = urlInfo.query.name

    //se nao existir a propriedade 'name' ele executa o bloco de codigo que contem um form para adicionar o 'name' e o seu valor
    if(!name) {
        fs.readFile("index.html", function(err, data) {
            response.writeHead(200, {"Contenty-Type": "text/html"})
            response.write(data)
            return response.end()
        })
    } else {

        const nameNewLine = name + ',\r\n'

        //quando o valor 'name' é escrito pelo form, o programa executa esse bloco de codigo que vai escrever o nome digitado em um arquivo e retornar para o form
        fs.appendFile("arquivo.txt", nameNewLine, function(err, data) {
            response.writeHead(302, { 
                location: "/",
            })
            return response.end()
        })
    }

})

server.listen(port, () => {
    console.log(`port: ${port}`)
})