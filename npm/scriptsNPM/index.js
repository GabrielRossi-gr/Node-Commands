const chalk = require("chalk")

//scrip escrito no arquivo package.json na parte scripts
//rodar: npm run <nomeDoScript>

//exemplo:
//npm start
//npm run test
//npm run test2

console.log("eu fui rodado pelo script " + chalk.green.bold("npm run start"))