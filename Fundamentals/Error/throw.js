const x = "10"

//checar se x é um número
if (!Number.isInteger(x)){
    throw new Error("O valor não é um numero inteiro! ")
}

console.log("Continua o código")