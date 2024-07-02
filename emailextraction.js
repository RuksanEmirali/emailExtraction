var fs = require('fs');

const pattern = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,})\b/gi;
const domainCounts = {};

fs.readFile('test.txt', 'utf8', function (err, data) {
    let matchedEmails = data.match(pattern);

    for (i = 0; i < matchedEmails.length; i++) {
        let domain = matchedEmails[i].split("@")[1];

        if (domainCounts.hasOwnProperty(domain)) {
            domainCounts[domain] += 1;
        } else {
            domainCounts[domain] = 1;
        };
    };

    console.log(domainCounts);
});



