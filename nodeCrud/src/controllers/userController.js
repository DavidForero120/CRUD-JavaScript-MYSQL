const controller = {};
const bcrypt = require('bcrypt');
const { hash } = require('bcryptjs');



//create user or new register
controller.newUser = async (req, res )=>{
    const data= req.body;
    //encrypt pass
    bcrypt.hash(data.password, 12).then(hash=>{
    //asign dataencritp to password
    data.password = hash;
    
        //VALIDATION DUPLICITY
        req.getConnection((err, conn)=>{
            conn.query('SELECT * FROM usuario WHERE nombreUsuario  = ? ' , [data.nombreUsuario], (err, rows)=>{
                if(rows.length > 0){
                    res.render('register', {error: 'Lo sentimos este usuario ya existe'});
            
                }else{
                     //CREATE USER
                    req.getConnection((err,conn)=>{
                        conn.query('INSERT INTO usuario set ?', [data], (err, rows)=>{
                            if(err){
                                res.render('register', {error: 'Lo sentimos este correo ya esta en uso!'}); 
                            }else{
                                res.redirect('/user/register');
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
                            res.render('login', {error: 'Los datos ingresados no son correctos'});
                        }else{  
                            //sesiones
                    
                        }
                    });
                });
            }else{
                res.render('login',{error: 'El usuario no existe'});
            }

        });
    });
}

module.exports = controller;