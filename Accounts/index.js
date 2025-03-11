const inquirer = require("inquirer")
const chalk = require("chalk")
const fs = require("fs")

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
    .then((answer) => {
        const action = answer['action']
        if(action == 'Criar conta'){
            createAccount()
        }
        else if(action == 'Consultar saldo'){
            getAccountBalance()
        }
        else if(action == 'Depositar'){
            deposit()
        }
        else if(action == 'Sacar'){
            withdraw()
        }
        else if(action == 'Sair'){
            console.log(chalk.bgBlue.white('Obrigado por usar o Accounts!'))
            // process.exit()
        }
    })
    .catch((err) => console.log(`erro---------->>> ${err} `))
}


//create account
function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir:"))
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para a sua conta:',
    },])
    .then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(accountName == ''){
            console.log(chalk.bgRed.black('Digite um nome valido!'))
            buildAccount()
            return
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            console.log(err)
        })

        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()
    })
    .catch((err) => console.log(err))
}

//add an amount to user account
function deposit(){
    console.log(chalk.green("Depositos"))
    
    inquirer.prompt([{
        type: 'input',
        name: 'accountName',
        message: 'Digite o nome da conta',
    },])
    .then((answer) => {
        const accountName = answer['accountName']
        console.log(accountName) 

        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([{
            name: 'amount',
            mensage: 'Quanto você deseja depositar?'
        }])
        .then(answer => {
            const amount = answer['amount']

            //add amount 
            addAmount(accountName, amount)

            operation()
        })
        .catch((err) => console.log(err))
    })
    .catch(err => console.log(err))
}

//verify if account existis
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Digite um valor valido!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    fs.writeFileSync(
        `./accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi depositado R$${amount} na conta.`))
}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`./accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJson)
}

function getAccountBalance(accountName){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual é o nome da sua conta?'
    }])
    .then(answer =>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.white(`Conta: ${accountName} \nSaldo: ${accountData.balance}`))
        return operation()
    })
    .catch((err) => console.log(err))
}

function withdraw(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual é o nome da conta?'
    }])
    .then(answer => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            withdraw()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Qual é o valor que desja sacar?'
        }])
        .then(answer => {
            const amount = answer['amount']
            removeAmount(accountName, amount)
            // return operation()
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.white('Ocorreu um erro!'))
        return withdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.white('Valor INDISPONIVEL!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.green('Foi realizado o saque na sua conta!'))
    operation()
}