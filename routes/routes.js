const express = require('express')
const router = express.router()
const list = require('../posts/books')
const show = require('../controllers/answerer')

router.get('/', (req, res) => res.json(list))

router.get('/:id', (req, res) => res.json(show))

router.post('/', (req, res) => )


module.exports = router