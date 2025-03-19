const express = require('express')
const chalk = require('chalk')
const app = express()
const port = 3000

//pegar a pasta 'templates'
const path = require('path')
const basePath = path.join(__dirname, 'templates')




//configurando os middlewares para ler o parametro body das requisições'rec'
app.use(   
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())


//rota com o form para receber'GET' os dados
app.get('/user/add', (rec, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

//rota para utilizar'POST' os dados
app.post('/user/save', (rec, res) =>{

    //utilizando os dados:
    console.log(rec.body)
    console.log(rec.body.name)
    console.log(rec.body.age)

    //voltando para a pagina do form html
    res.sendFile(`${basePath}/userform.html`)
})




//rota para receber o id do usuario 
app.get('/user/:id', (req, res) =>{
    const id = req.params.id
    
    //pegando o parametro id da url   http://localhost:3000/user/123456
    console.log(chalk.bgBlue(`estamos buscando pelo usuário: ${id}`))
    res.sendFile(`${basePath}/index.html`)
})

//rota base
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(port)
})
