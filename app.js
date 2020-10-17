import { createServer } from 'http';
import { hostname } from 'os';
console.log("Kubia server is starting...");
let handler = (req, res) => { 
  console.log("Received request from " + req.connection.remoteAddress);
  res.writeHead(200);
  res.end(`You've hit ${hostname()}`);
}
let www = createServer(handler);
www.listen(8080);