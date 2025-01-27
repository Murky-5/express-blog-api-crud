const express = require('express')
const app = express()
const verified = require('./middlewere/input_validator')
const routes = require('./routes/routes')

app.use('/books', verified, routes)



// server
const hostname = "127.0.0.1"
const port = 3001

// starts a simple http server locally on port 3000
app.listen(port, `${hostname}`);