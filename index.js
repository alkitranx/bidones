const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const SERVER_PORT = 3000;

require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ruta de creacion de usuarios
app.use(require('./routes/index'))

app.listen(SERVER_PORT,
  () => console.log(`Server online on http://localhost:${SERVER_PORT}`));
