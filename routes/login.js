const express = require('express'),
    app = express(),
    {validationResult, body} = require('express-validator'),
    bcrypt= require('bcrypt');

// local resources
const {checkPassword, checkEmail}= require('../validations/loginValidations'),
    userRepository =require('../repositories/user'),
    loginService = require('../services/login');
    


app.post('/login' ,[checkEmail, checkPassword], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const {email, password} = req.body;
    const user= await userRepository.findByEmail(email);
    const passwordValidated= bcrypt.compareSync(password, user.password);
    
        if (!passwordValidated) {
            return res.status(400).json({msg:'password incorrecto'})
        }
        else if(!user) {
            return res.status(400).json({msg:'usuario incorrecto'})
        }
        else if(user.status === 'inactive') {
            return res.status(400).json({msg:'usuario y/o contraseña incorrecto-usuario inactivo'})
        }
        
        //generando jwt

    const token = loginService.generateJwt({
        id:user.id,
        email: user.email,
        role: user.role
    })
    .then(token => res.json({user, token}))
    .catch(err=>res.status(400).json(err));



        
        
    
        

    


     
    
    

    
    
});



module.exports = app;