const http = require('http');
const os = require('os');
console.log("Kubia server is starting...");
let handler = (req, res) => { 
  console.log("Received request from " + req.connection.remoteAddress);
  res.writeHead(200);
  res.end("You've hit " + os.hostname() + " with MAC of " + os.networkInterfaces().en0[0].address + "\n");
}
let www = http.createServer(handler);
www.listen(8080);