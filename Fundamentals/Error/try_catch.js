//a vantagem de usar o "try catch" é que quando o programa apresenta algum erro, ele não para sua execução
//é muito usado para fazer operações de mensageria via internet que pode ocasionar em falha por diversos fatores como falha na conexão de rede 


//o bloco "try" vai tentar mudar o valor de uma constante, isso da um erro destrutivo que para o programa

const x = 10 

try {
    x = 2  
} catch (err) {
    console.log(`Erro ${err}`) 
}

//quando ele não conseguir ele cai no bloco "catch" que pode ser usado para tomar alguma providencia com base no erro

console.log("Continua o código")