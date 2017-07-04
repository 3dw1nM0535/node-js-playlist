var fs = require('fs');

var content = fs.readFileSync('./read.txt', 'utf8');
fs.writeFileSync('./content.txt', content.split('\n').reverse().join('\n'));
