
const controller = {};
/*----METHODS CRUD----*/  

//READ-CONSULTAR  
controller.list = (req, res)=>{
    /*Obtener la conexion */
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM Comprador', (err,compradores)=>{
            if(err){
                res.json(err);
            }

            res.render('Compradores',{
                data: compradores
            });

        });
        
    });
    
};

//NEW OR SAVE Comprador
controller.saveComprador = (req, res)=>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO Comprador set ?', [data], (err, newComprador)=>{
            console.log(newComprador);
            res.redirect('/customer/listCustom')
        });
    })
   
}
//CONSULTAR UN REGISTRO 
controller.consult = (req, res)=>{

    const id = req.params.id;

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM Comprador WHERE id = ?', [id], (err, comprador)=>{
            console.log(comprador)
            res.render('compradorEdit',{
                data: comprador[0]
            })
        })
    })
}
//EDIT REGISTER CONSULTED
controller.edit = (req,res)=>{
    const id = req.params.id;
    const newData = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE Comprador set ? WHERE id = ?', [newData, id], (err, data)=>{
            console.log(data)
            res.redirect('/customer/listCustom');
        })
    })
}
//DELETE REGISTER
controller.eliminar = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM Comprador WHERE id = ?', [id], (err, rows)=>{
            res.redirect('/customer/listCustom')
        })
    })
}



module.exports = controller;