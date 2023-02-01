const controller = {};
const bcrypt = require('bcrypt');
const { hash } = require('bcryptjs');
const session = require('express-session');



//create user or new register
controller.newUser = async (req, res )=>{
    const data= req.body;
    //encrypt pass
    bcrypt.hash(data.password, 12).then(hash=>{
    //asign dataencritp to password
    data.password = hash;
    data.password2 = hash;
    
        //VALIDATION DUPLICITY
        req.getConnection((err, conn)=>{
            conn.query('SELECT * FROM usuario WHERE nombreUsuario  = ? ' , [data.nombreUsuario], (err, rows)=>{
                if(rows.length > 0){
                    res.render('register', {error: 'Lo sentimos este usuario ya existe', exito: null});
            
                }else{
                     //CREATE USER
                    req.getConnection((err,conn)=>{
                        conn.query('INSERT INTO usuario set ?', [data], (err, rows)=>{
                            if(err){
                                console.log(data)
                                res.render('register', {error: 'Lo sentimos este correo ya esta en uso!', exito:null}); 
                            }else{
                                res.render('register', {exito: 'El usuario se ha creado correctamente', error:null});
                            }
                        });
                    });
                }
            })
        });
    });
}


//INICIAR SESION
controller.iniciar =  (req, res)=>{
    const data = req.body
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuario WHERE nombreUsuario  = ?', [data.nombreUsuario], (err, rows)=>{
            //VERIFY IF USER EXIST
            if(rows.length > 0){
                //VALIDATION DATA
                //hacer un foreach para recorrer los datos del objeto obtenido
                rows.forEach(element => {
                bcrypt.compare(data.password, element.password, (err, isMatch)=>{
                        if(!isMatch){
                            res.render('login', {error: '!Información incorrecta, vuelve a intentarlo¡'});
                        }else{  
                            //sesiones
                            if(element.rol === "visitante"){
                            let idU = element.id;
                            req.session.userId = idU;
                            
                            res.redirect('/home/visit');
                            }else if(element.rol === "admin"){
                                res.redirect('/home/visit')
                            }
                        }
                    });
                });
            }else{
                res.render('login',{error: '¡El usuario ingresado no existe!'});
            }

        });
    });
}

module.exports = controller;