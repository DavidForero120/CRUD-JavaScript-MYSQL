const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const serve = express();
const compradorRoutes = require('./routes/compradorRoute.js');

//express settings

//PORT
serve.set('port', process.env.PORT || 3000);

//CONFIG EJS VIEWS  
serve.set('view engine','ejs');
serve.set('views', path.join(__dirname, 'views'))

//Middlewares->manejar los datos que envio el usuario
serve.use(morgan('dev'));
serve.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crudnode'
}, 'single'));

//use routes
serve.use('/', compradorRoutes);

//Static files
serve.use(express.static(path.join(__dirname, 'public')));

//server started
serve.listen(serve.get('port'), ()=>{
    console.log('server start')
});