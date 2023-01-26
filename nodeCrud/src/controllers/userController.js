const controller = {};
const bcrypt = require('bcrypt');
const { hash } = require('bcryptjs');

//create user or new register
controller.newUser = async (req, res)=>{
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

module.exports = controller;