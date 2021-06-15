const jwt = require('jsonwebtoken');

const generateJwt = (payload) => {

    return new Promise((resolve, reject) => {

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

module.exports = {generateJwt}