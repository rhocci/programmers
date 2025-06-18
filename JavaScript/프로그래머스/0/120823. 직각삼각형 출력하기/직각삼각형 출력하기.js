const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (n) {
    for (let i = 1; i <= n; i++) {
        input += '*'.repeat(i);
        if (i !== n) input += '\n';
    }
    
}).on('close', function () {
    console.log(input);
});