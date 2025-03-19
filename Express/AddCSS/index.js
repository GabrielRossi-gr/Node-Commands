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




//rodar arquivos estáticos
app.use(express.static('public'))




const users = require('./users')

app.use('/users', users)


app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(port)
})
