
const express = require('express');
const app = express();
const routes = require('../conf/routes');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/v1', routes)

module.exports = app