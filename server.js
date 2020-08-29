var http = require("http"); //se inicia esta variable
var url = require("url");

function iniciar(route) {
    function onRequest(request, response) { //funcion anonima
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida");
        
        route(pathname);
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("Hola Mundo inmundo ");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888); //llamada a la funcion anonima
    console.log("Servidor iniciado");
    
}
exports.iniciar = iniciar;

//----------------------

