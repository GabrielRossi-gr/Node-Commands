const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')



//middleware   <-------
const checkAuth = function(rec, res, next) {

    //toda requisição que for feita o programa vai cair nesse bloco de código
    rec.authStatus = true

    if (rec.authStatus) {
        console.log('Está logado')
        //deixa o usuario seguir
        next()

    } else {
        //trava a aplicação se o usuário não estiver logado
        console.log('não está logado')

    }
}

//da para checar se o usuário está logado em qualquer momento da aplicação 
app.use(checkAuth)





app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(port)
})