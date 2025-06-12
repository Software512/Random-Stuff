const http = require('node:http');
const child_process = require('node:child_process');
const os = require('node:os');


const server = http.createServer((req, res) => {   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!DOCTYPE html><html><body><p style="font-family: sans-serif">You visited this page! Shuting down the server now lol.</p></body></html>');
}).listen(8000)

server.on('request', () => {    if (os.type == "Windows_NT") {
        child_process.exec('"shutdown" /f /s /t 0');
    } else {
        child_process.exec('"shutdown" -h now');
    }
})
