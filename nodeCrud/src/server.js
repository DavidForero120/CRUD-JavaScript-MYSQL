const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const serve = express();
const compradorRoutes = require('./routes/compradorRoute.js');
const indexRoutes = require('./routes/IndexRoute.js');
const userRoutes = require('./routes/userRoute');
const { urlencoded } = require('express');

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

/*entiende los datos de los formularios-permite el procesamiento de datos
si no se tiene no sirve los metodos http*/
serve.use(express.urlencoded({extended: false}));
serve.use(express.json());

//confing env
const dotenv = require('dotenv');
dotenv.config({path:'../env/.env'});

//use routes
serve.use('/customer', compradorRoutes);
serve.use('/', indexRoutes);
serve.use('/user', userRoutes);

//config sessions
const session = require('express-session');
serve.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Static files
serve.use(express.static(path.join(__dirname, 'public')));

//server started
serve.listen(serve.get('port'), ()=>{
    console.log('server start')
});