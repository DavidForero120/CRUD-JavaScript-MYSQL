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
        });
    })
   res.redirect('/')
}

module.exports = controller;