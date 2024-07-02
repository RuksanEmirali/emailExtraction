var fs = require('fs');

// const pattern = new RegExp("/\S@softwire.com/g"); 
const pattern = /\s[\w|.'_%+\-]+(@softwire.com)\s/g;

fs.readFile('test.txt', 'utf8', function (err, data) {
    let matchedEmails = data.match(pattern);
    console.log(matchedEmails.length);
});



