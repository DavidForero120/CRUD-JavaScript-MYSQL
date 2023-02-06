controller = {}

controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM producto', (err, rows)=>{
            if(err){
                console.log(err);
            }else if (rows){
                res.render('product/product', {data: rows});
            }
        });
        
    });
}

controller.create = (req, res)=>{
    let data = req.body
    data.image = req.file.filename
    req.getConnection((err, conn)=>{
       conn.query('SELECT * FROM producto WHERE nombre = ?', [data.nombre], (err, rows)=>{
        if(rows.length > 0){
            res.json({error: 'El producto ya existe'});
        }else{
            conn.query('INSERT INTO producto SET ? ', [data], (err, rows)=>{
                if(err){
                    console.log(err)
                }else{
                    res.json({success: 'Producto creado'});
                }
            });
        }
    });
});     
}

module.exports = controller;