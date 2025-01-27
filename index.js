const express = require('express')
const app = express.app()
const verified = require('../middlewere/input_validator')
const routes = require('./routes/routes')

app.use('/:id', verified, routes)


app.get('/books', routes)