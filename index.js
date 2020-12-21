var http = require('http');  

http.createServer(function (req, res) {   
  res.write("Ayame");   
  res.end(); 
}).listen(3000);

/**
 * @param {string} License
 */

var AyameCore = require('./Ayame-Core/core-start.js'),
    AyameScript = require('./Ayame-Main-Modules/Ayame-Script.js'),
    AyameToken = 'NzQ1MTQwNDA4Njk0MDc5NTU5.XztcFQ.hD46kMTuYZ9Vx4wJ8WKKQzdchB0';
    
AyameCore(AyameScript, AyameToken /**@param {string} functions*/);