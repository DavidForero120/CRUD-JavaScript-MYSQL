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


module.exports = controller;