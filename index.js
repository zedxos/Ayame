var http = require('http');  

http.createServer(function (req, res) {   
  res.write("Ayame");   
  res.end(); 
}).listen(3000);

/**
 * @param {string} MIT LICENSE
 */

var AyameCore = require('./Ayame-Core/core-start.js'),
    AyameScript = require('./Ayame-Main-Modules/Ayame-Script.js'),
    AyameSecret = 'experimenting C: /*testing*/',
    AyameToken = 'token C:';
    
AyameCore(AyameScript, AyameToken /**@param {string} functions*/);