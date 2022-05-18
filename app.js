require('dotenv').config();//para usar con archivo .env
const express = require('express');//el servidor
const hbs = require('hbs');//handlebars

const app = express();
//const port = 8080;
const port = process.env.PORT; //port viene desde el archivo .env

// HABDLEBARS
app.set('view engine', 'hbs'); //Busca la carpeta views
hbs.registerPartials(__dirname + '/views/partials');
// los archivos partials me permiten trabajar el home.hbs por partes como si estuviera con un framework

// SERVIR CONTENIDO ESTATICO
app.use( express.static('public')); //mostrara index.html en el navegador

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alexander Millan',
        titulo: 'WebServer Node'
    }); //renderisa y abre views home.hbs pero sin la extension .hbs
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alexander Millan',
        titulo: 'WebServer Node'
    }); //renderisa y abre views generic.hbs pero sin la extension .hbs
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alexander Millan',
        titulo: 'WebServer Node'
    }); //renderisa y abre views elements.hbs pero sin la extension .hbs
});



// app.get('/', (req, res) => {
//   res.send('Home-Page')
// });

// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });
//con esto no es necesario escribir index.html en el navegador, solo basta con index

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });
//con esto no es necesario escribir generic.html en el navegador, solo basta con generic

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });
//con esto no es necesario escribir elements.html en el navegador, solo basta con elements

// app.get('*', (req, res) => {//comodin en caso de no existir
//     res.send('404 Pagina No Encontrada');
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
//comodin en caso de no existir pero direccionando a una pagina que despues direcciona al home

app.listen(port, () => {
    console.log(`Aplicacion ejemplo corriendo en el puerto ${port}`);
});

// app.listen(8080);

//EJECUTAR EN EL CMD COMO npm start

/*
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },

//LIBRERIAS NPM:

https://www.npmjs.com/package/express
https://www.npmjs.com/package/handlebars
https://github.com/pillarjs/hbs

*/