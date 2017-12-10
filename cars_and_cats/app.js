var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/images/car1.jpeg'){
        fs.readFile('./images/car1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/images/car2.jpeg'){
        fs.readFile('./images/car2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/images/car3.jpeg'){
        fs.readFile('./images/car3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/cats'){
        fs.readFile('./views/cats.html','utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);  
            response.end(); 
        });
    
    }else if(request.url === '/images/cat1.jpeg'){
        fs.readFile('./images/cat1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/images/cat2.jpeg'){
        fs.readFile('./images/cat2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url === '/images/cat3.jpeg'){
        fs.readFile('./images/cat3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);  
            response.end(); 
        });
    }else if(request.url ==='/cars/new'){
        fs.readFile('./views/new_cars.html', function (errors, contents){
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
server.listen(7077);