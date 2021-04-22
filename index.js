const express = require('express')
const app = express();
const bodyParser = require('body-parser');


require('./BD/config');

app.use(express.json());
app.use(express.urlencoded({extended: false}));




// ruta de creacion de usuarios
app.use(require('./routes/index'))

 









app.listen(3000, (req, res) => {
    console.log('Server online')
});