const http = require("http")

const port = 3000

//configura o servidor
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Contenty-Type", "text/html")
    response.end("<h1>Olá, este é o meu primeiro server com HTML!</h1> <p>Testando atualização</p>")
})

//roda o servidor na porta "port" com uma função de calback para o print no terminal 
server.listen(port, () => {
    console.log("Servidor Rodando na porta %d", port)
})

