const express = require ('express');
const app = express();

app.use(require('./users'));
app.use(require('./products'));
app.use(require('./warehouse'));
app.use(require('./productMovement'));
app.use(require('./stock'))



module.exports = app