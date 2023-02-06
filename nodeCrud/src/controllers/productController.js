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
        
    })
}



module.exports = controller;