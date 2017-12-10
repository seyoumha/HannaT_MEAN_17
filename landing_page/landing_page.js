var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/dojos'){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents);
            response.end(); 
        });
    }
    else {
        response.writeHead(404);
        response.end('the URL requested is not available');
    }
});
server.listen(6789);
