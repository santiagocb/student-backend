
const app = require('./app');
const config = require('../conf/constants');
const mongoose = require('mongoose');

app.listen(config.APP_PORT, _ => {
  console.log(`Student app backend running on port ${config.APP_PORT}`);
});

mongoose
  .connect('mongodb://root:example@localhost:27017/admin', {
    useUnifiedTopology: true,
    useNewUrlParser: true })
  .then(_ => console.log('Conexión con mongo establecida'))
  .catch(e => console.log('Error al conectarse con mongo. Error: ' + e));