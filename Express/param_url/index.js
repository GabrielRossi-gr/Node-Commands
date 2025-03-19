const express = require('express')
const chalk = require('chalk')

const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')


app.get('/user/:id', (req, res) =>{
    const id = req.params.id
    
    //pegando o parametro id da url   http://localhost:3000/user/123456
    console.log(chalk.bgBlue(`estamos buscando pelo usuário: ${id}`))
    res.sendFile(`${basePath}/index.html`)
})

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(port)
})