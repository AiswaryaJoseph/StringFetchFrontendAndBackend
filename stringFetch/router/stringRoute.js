const Str = require('../models/stringFetch')
const stringCreate = require('../routeHandler/controller')

const express= require('express')

const router = express.Router()
//

//create
router.post('/str',stringCreate.stringCreate)
//read all
router.get('/strRead',stringCreate.getAllStrings)
//read one
router.get('/strRead/:id',stringCreate.getParticularString)

//update
router.patch('/str/:id',stringCreate.updateString)
///delete
router.delete('/str/:id', stringCreate.stringDelete)

module.exports = router