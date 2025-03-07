const os = require("os")

console.log(os.cpus())
console.log("memoria livre em bytes: " + os.freemem())
console.log("diretório raiz: " + os.homedir())
console.log("tipo de sistema: " + os.type())
