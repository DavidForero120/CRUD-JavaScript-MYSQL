const controller = {};
const bcrypt = require('bcrypt');


//create user or new register
controller.newUser = async (req, res)=>{
    const nombreUsuario= req.body;
    const nombre= req.body;
    const correo = req.body;
    const rol= req.body;
    const {password} = req.body;
    const passEncrypt = await bcrypt.hash(password, 8);
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO usuario set ?', [nombreUsuario,nombre,correo, rol, passEncrypt ], (err, rows)=>{
               if(err){
                console.log('no se pudo registrar')
               }else{
                console.log(rows);
                res.send('registrado')
               }
            
        });
    })
}

module.exports = controller;