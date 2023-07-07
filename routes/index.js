const express = require('express')
const router = express.Router()

const {marvel} = require ('./../resources/marvel')

router.get('/',((req,res)=>res.render('index',{'title':'Peliculas de Marvel','data':marvel})))

module.exports = router