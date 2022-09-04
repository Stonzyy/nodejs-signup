const express = require('express')
const app = express()
app.listen(3000)



// use routes

const signup = require('./signup')
app.use('/users',signup)