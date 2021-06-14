const express = require('express'),
    app = express(),
    {validationResult, body} = require('express-validator'),
    bcrypt= require('bcrypt');

// local resources
const {checkPassword, checkEmail}= require('../validations/loginValidations'),
    {loginRepository}=require('../repositories/index'),
    {userModel}= require('../models/config');


app.post('/login' ,[checkEmail, checkPassword], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const {email, password} = req.body;
    const user=    await userModel.findOne({where:{email}}) //TODO cambiar los mensajes por llos correctos - verificar estados//
    const validatePassword= bcrypt.compareSync(password, user.password);
        if(!user) {
            return res.status(500).json({msg:'usuario y/o contraseña incorrecto'})
        };
        if(user.status === 'inactive') {
            return res.status(500).json({msg:'usuario y/o contraseña incorrecto-usuario inactivo'})
        };
        if(!validatePassword){
            return res.status(500).json({msg:'usuario y/o contraseña incorrecto- password incorrecto'})
        };

        //generando jwt

    const token = loginRepository.generateJwt(user.id)
        .then(token => res.json({user, token}))
        .catch(err=>res.status(400).json(err));



        
        
    
        

    


     
    
    

    
    
});



module.exports = app;