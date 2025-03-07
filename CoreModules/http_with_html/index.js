const http = require("http")
// const url = require("url")

const port = 3000

//configura o servidor
const server = http.createServer((request, response) => {
    const urlInfo = require("url").parse(request.url, true)
    const name = urlInfo.query.name

    response.statusCode = 200
    response.setHeader("Contenty-Type", "text/html")

    if(!name) {
        response.end('<h1>Preencha o seu nome:</h1> <form method="GET"> <input type="text" name="name"/> <input type="submit" value="Enviar"/> </form>')
    } else {
        response.end(`<h1> Seja bem vindo ${name}! </h1>`)
    }
})

//roda o servidor na porta "port" com uma função de calback para o print no terminal 
server.listen(port, () => {
    console.log("Servidor Rodando na porta %d", port)
})

