var server = require("./server");
var router = require("./router");
server.iniciar(router.route);

//console.log("si llego hasta aca");