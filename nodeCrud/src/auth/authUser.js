//VALIDATION AUTH SESSION FOR USERS
const validation = {}
validation.sessiValidation = (req, res, next)=>{
    if(!req.session.authUser){
        res.redirect('/session/expired');
    }else{
        next()
    }
}

//DESTROY SESSIONS SAVED
validation.destroy = (req, res, next)=>{
    if(!req.session.authUser){
        next()
    }
    else{
        req.session.destroy()
        next()
    }
}
//DESTROY SESSION IF LEAVE WINDOW
validation.leave = (req, res, next)=>{
    
        
}
module.exports = validation;