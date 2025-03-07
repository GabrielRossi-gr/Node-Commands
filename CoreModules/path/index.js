const path = require("path")

const customPath = "/relatorios/gabriel/relatorios1.pdf"

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))

//path absoluto
console.log(path.resolve("teste.txt"))


//formando path
const midFolder = "relatorios"
const fileName = "gabriel.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)
console.log(finalPath)