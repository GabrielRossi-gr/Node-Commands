const http = require("http")
const fs = require("fs")
const url = require("url")

const port = 3000

const server = http.createServer((requst, response) => {

    //pega a url decomposta
    const q = url.parse(requst.url, true)
    //pega o indice 1 da url: que seria a primeira cois depois do localhost:3000/
    const fileName = q.pathname.substring(1)

    //se ele encontrar uma pagina, ele le o arquivo html e exibe
    if(fileName.includes("html")) {
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, function(err, data) {
                response.writeHead(200, {"Content-Type": "text/html"})
                response.write(data)
                return response.end()
            })
        }
    //se ele nao encontrar uma pagina no link, ele exibe uma pagina de erro
    } else {
        fs.readFile('404.html', function(err, data) {
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(data)
            return response.end()
        })
    }

})

server.listen(port, () => {
    console.log(`port: ${port}`)
})