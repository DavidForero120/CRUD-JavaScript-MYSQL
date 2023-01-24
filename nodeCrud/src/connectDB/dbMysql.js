const mysql = require('mysql');
const connection = require('express-myconnection');


module.exports =  connectionDM =>{
    //conection database
    connection(mysql,{
        host:'localhost',
        user: 'root',
        password:'',
        port: '3306',
        database:'crudnode',
       
    },
    //single is for not excepction 
    'single' )
    
}
    



