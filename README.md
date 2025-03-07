<div space>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="150" height="150" /> 
    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" width="150" height="150" /> 
</div>


# npm
### Documentação: https://docs.npmjs.com/ 
```
    npm init                                          //cria um projeto npm, você precisa usar esse comando para usar módulos externos
    npm init -y                                       //cria projeto de forma rapida com tudo no default
    npm install <nomeDoModulo>                        //instala módulos externos
    npm install                                       //baixa todos os módulos externos de um projeto
    npm install --save-dev <nomeDoModulo>             //instala módulos em dev dependences, quando o projeto estiver em produção esses módulos não vão ser importados
    npm install -g <nomeDoModulo>                     //instala módulos de forma global
    npm link <nomeDoModulo>                           //copia todas as pastas de um módulo global para seu projeto
    npm uninstal <nomeDoPacote>                       //desisntala e retira o pacote do package.json
    npm update                                        //atualiza todos os pacotes
    npm update <nomeDoModulo>                         //atualiza pacote específico
    npx npm-check-updates -u                          //checa se tem alguma atualização dos pacotes
    npm run <nomeDoScript>                            //roda scripts escritos no package.json
    npm start                                         //roda script configurado para rodar o projeto sem precisar da palavra reservada "run"
    npx <nomeDoPacote>                                //o npx executa os pacotes do node, exemplo: npx cowsay 'Hello World!'
```


# Node
### Documentação: https://nodejs.org/docs/latest/api/
```
    node <nomeDoArquivo>                              //roda o arquivo .js
    
```


# External Modules
### Find modules: https://www.npmjs.com/

```
    minimist                                          //modulo que ajuda na criação de argumentos
    chalk@4.1.2                                       //modulo para mudar as cores do console
    inquirer@8.1.2                                    //ler dados por terminal
    lodash
    
```

# Core Modules
```
    readline                                          //ler dados digitados pelo usuário
    http                                              //criar servidores node
    url                                               //usadeo para decompor urls
    fs                                                //file system, usado para ler e esquever e criar arquivos e pastas
    path                                              //manipular e criar caminhos de diretorios e arquivos
    os                                                //receber informações da maquina
```
