const http = require("http")

const port = 3000

//configura o servidor
const server = http.createServer((request, response) => {
    response.write("Oi http!")
    response.end()
})

//roda o servidor na porta "port" com uma função de calback para o print no terminal 
server.listen(port, () => {
    console.log("Servidor Rodando na porta %d", port)
})

