const express = require('express')
const router = express.Router()
const list = require('../posts/books')
const {show, create, update, modify, destroy} = require('../controllers/answerer')

router.get('/', (req, res) => res.json(list))

router.get('/:id', show)

router.post('/', create)

router.put('/:id', update)

router.patch('/:id', modify)

router.delete('/:id', destroy)



module.exports = router