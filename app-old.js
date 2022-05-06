
const http = require('http');

http.createServer( (req, res) => { //request, resolve

    console.log(req);

    // res.writeHead(404); //pagina o recurso no encontrado
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //200 es todo salio OK res.writeHead(200);
    // content type de tipo texto plano res.writeHead(200, {'Content-Type': 'text/plain'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'}); //esto genera un archivo que se puede abrir en excel

    res.write('id, nombre\n'); //se vera organizado en excel por filas y columnas
    res.write('1, Alexander\n');
    res.write('2, Jeronimo\n');
    res.end();

    /*
    const persona = {

        id: 1,
        nombre: 'Alexander Martinez Millan',
    }
    */

    //res.write( JSON.stringify( persona) );//stringify convirte de json a string

    // res.write('404 | Pagina no Encontrada');

    // res.write('Hola Alexander');
    res.end(); //termina de indicar que mi resolve esta completo y quiero enviarla

}).listen(8080);

console.log('Escuchando el puerto ', 8080);

//escribir en el navegador http://localhost:8080/
