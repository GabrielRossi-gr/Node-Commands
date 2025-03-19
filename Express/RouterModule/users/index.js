const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')




//rota com o form para receber'GET' os dados
router.get('/add', (rec, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

//rota para utilizar'POST' os dados
router.post('/save', (rec, res) =>{

    //utilizando os dados:
    console.log(rec.body)
    console.log(rec.body.name)
    console.log(rec.body.age)

    //voltando para a pagina do form html
    res.sendFile(`${basePath}/userform.html`)
})

//rota para receber o id do usuario 
router.get('/:id', (req, res) =>{
    const id = req.params.id
    
    //pegando o parametro id da url   http://localhost:3000/user/123456
    console.log(`estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router