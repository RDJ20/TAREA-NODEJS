const express = require('express')
const app= express()

const path = require('path')

app.listen(3000, () =>{

    console.log('Aplicacion corriendo en el puerto 3000')
})

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'HTML.html'))

    })

//     var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send('Hola Mundo!');
// });

// app.listen(3000, function() {
//   console.log('Aplicación ejemplo, escuchando el puerto 3000!');
// });