
const app = require('./app');
const config = require('../conf/constants');
const mongoose = require('mongoose');

app.listen(config.APP_PORT, _ => {
  console.log(`Student app backend running on port ${config.APP_PORT}`);
});

mongoose
  .connect(`mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@localhost:${config.MONGO_PORT}/${config.MONGO_DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true })
  .then(_ => console.log('Conexión con mongo establecida'))
  .catch(e => console.log('Error al conectarse con mongo. Error: ' + e));

mongoose.set('useCreateIndex', true);