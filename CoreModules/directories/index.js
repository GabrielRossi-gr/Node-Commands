const fs = require("fs")

if (!fs.existsSync("./minhapasta")) {
    console.log("dir nao existe")
    fs.mkdirSync("minhapasta")
} else {
    console.log("dir existe")
}