const fs = require('fs')  //modulo File System

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data);
});