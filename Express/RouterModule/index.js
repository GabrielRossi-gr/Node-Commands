const express = require('express')
const chalk = require('chalk')
const app = express()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(   
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())





//importando o módulo de rotas
const users = require('./users')

//usando o modulo de rotas com a inicialização '/users'
app.use('/users', users)





app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(port)
})
