const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const serve = express();
const session = require('express-session');
const compradorRoutes = require('./routes/compradorRoute');
const indexRoutes = require('./routes/IndexRoute');
const userRoutes = require('./routes/userRoute');
const productsRoutes = require('./routes/productRoute');
const cors = require('cors');
const flash = require('connect-flash');
//express settings
serve.use(cors());
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
}));
/*entiende los datos de los formularios-permite el procesamiento de datos
si no se tiene no sirve los metodos http*/
serve.use(express.urlencoded({extended: true}));
serve.use(express.json());

//config sessions
serve.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}));

/*serve.use((req, res,next)=>{
        console.log(req.session);
        next();
});*/

//confing env
const dotenv = require('dotenv');
dotenv.config({path:'../env/.env'});

//use routes
serve.use('/customer', compradorRoutes);
serve.use('/', indexRoutes);
serve.use('/user', userRoutes);
serve.use('/', productsRoutes);

serve.use(flash());

//Static files
serve.use(express.static(path.join(__dirname, 'public')));

//server started
serve.listen(serve.get('port'), ()=>{
    console.log('server start')
});