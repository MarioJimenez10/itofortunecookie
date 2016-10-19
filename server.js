// Cargando el modulo http
var http = require('http');
//cargando la libreria de colores
var colors = require("colors");
//generando tema
colors.setTheme({
silly: 'rainbow',
input: 'grey',
verbose: 'cyan',
prompt: 'grey',
info: 'green',
data: 'grey',
help: 'cyan',
warn: ['yellow', 'bgwhite'],
debug: 'blue',
error: 'red',
archivement: 'rainbow'
})
//obteniendo configuraciones
var config = require('./config/config');
var IP = config.IP;
var PORT = config.PORT;
// creando el server
var server = http.createServer(function(req,res){
    res.writeHead(
    200,
    {
        'Content-Type': 'text/plain',
        'Server' : 'Buho@0.0.0'
    }
    );
    res.write('hola desde el server');
    res.end();
});
// Poniendo a escuchar al server
server.listen(PORT,IP,function(){
    console.log("Online ".info + `http://${IP}:${PORT}/ ...`.info);
});