 // this basic raw node code for server 
/*
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    let num = _.random(0,5);
    console.log(num);
    console.log("req");
    console.log(req.url, req.method);
    console.log("request made");
    //set hearder content type
    // res.setHeader('Content-Type','text/plain');
    // res.write('hello world' );
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>hello world</h1>');
    // res.write('<p>how are you</p>');
    let path = './view/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;   
        case '/about-me':
            // path += 'about.html'
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end();
            break;   
        case '/home':
            // path += 'about.html'
            res.statusCode = 301;
            res.setHeader('Location','/')
            res.end();
            break;   
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('<p>something went wrong</p>')
        } else {
            res.end(data)

        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening to server on port 3000')
})

*/