//  var counter = 0
//  
// for(var i = 0; i < input.length; i++) {
//   if ((input.substring(i, 13) == '@softwire.com')) { counter = counter + 1 }
// }
//  
// print counter

var fs = require('fs');
var counter = 0
let txtcont = fs.readFile('test.txt','utf8', function (err, data) {
    // Display the file content
    return data;
})
 console.log(txtcont)



