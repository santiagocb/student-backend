
const express = require('express');
const app = express();
const routes = require('../conf/students.routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1/students', routes);

module.exports = app;