const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer
  .prompt([
    
    {type: "input", name: "userName", message: "digite o nome:"},   
    {type: "number", name: "userAge", message: "digite a idade:"}

  ])
  .then((answers) => {

    console.log(answers)
    const age = answers.userAge
    if (!Number.isInteger(age)){
        throw new Error(chalk.bgRed("Idade invalida"))
    }
    console.log(chalk.bgGreen("Nome: %s, Idade: %d", answers.userName, age))

  })

  .catch((err) => console.log(err));