const {userModel} = require('../models/config');
const jwt = require('jsonwebtoken');

// TODO hacer que esta funcion trabaje revisar documentacion//
function login(payload) {   
    
    const user= userModel.findOne(payload)
    if(!user){
        res.status(400).json({msg:'error de usuarioemail'})
    }


}


const generateJwt = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = {uid};
        const secret = process.env.SECRET_KEY

        jwt.sign(payload, secret, {
            expiresIn: '1H'
        }, (err, token)=> {

            if(err){
                console.log(err);
                reject('no se genero el jwt')
            }
            else{
                resolve(token)
            }

        })


    })

}




module.exports= {
    login,
    generateJwt
}