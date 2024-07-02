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

    // return ten most common domains in order
    let sortableDomainCounts = Object.entries(domainCounts);

    let sortedCounts = sortableDomainCounts.sort((a, b) => b[1] - a[1])

    for (let i = 0; i < 10; i++) {
        console.log(`${sortedCounts[i][0]}: ${sortedCounts[i][1]}`)
    }
});



