const http = require("http")
const fs = require("fs")

const port = 3000

const server = http.createServer((requst, response) => {
    fs.readFile("mensagem.html", function(err, data) {
        response.writeHead(200, {"Contenty-Type": "text/html"})
        response.write(data)
        return response.end()
    })
    
})

server.listen(port, () => {
    console.log(`port: ${port}`)
})