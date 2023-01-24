const express = require('express');
const path = require('path');
const morgan = require('morgan');
const connMysql = require('./connectDB/dbMysql');
const serve = express();
const compradorRoutes = require('./routes/comprador.js');

//use routes
serve.use('/', compradorRoutes);


//Static files
serve.use(express.static(path.join(__dirname, 'public')));


//express settings

//PORT
serve.set('port', process.env.PORT || 3000);

//CONFIG EJS VIEWS  
serve.set('view engine','ejs');
serve.set('views', path.join(__dirname, 'views'))

//Middlewares->manejar los datos que envio el usuario
serve.use(morgan('dev'));

//conectdb
serve.use(connMysql);



//server started
serve.listen(serve.get('port'), ()=>{
    console.log('server start')
});