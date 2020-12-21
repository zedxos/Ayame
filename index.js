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
    AyameToken = 'NzQ1MTQwNDA4Njk0MDc5NTU5.XztcFQ.EUgqrzGv6t5q8zma-7kfBW-Vf-E';
    
AyameCore(AyameScript, AyameToken /**@param {string} functions*/);