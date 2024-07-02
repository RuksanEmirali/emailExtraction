var fs = require('fs');

var counter = 0;

fs.readFile('test.txt', 'utf8', function (err, data) {
    const content = data;

    for (let i = 0; i < content.length; i++) {
        if (content.substring(i, (i + 13)) == '@softwire.com') {
            counter += 1;
        }
    }
    console.log(counter);
});



