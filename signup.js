const express = require('express');
const route = express.Router();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const crypto = require('crypto')

// Connect to Database
mongoose.connect('mongodb://localhost/nsrlive')

// body parser url encuding
route.use(bodyParser.urlencoded({ extended: true }))

// schema
const schema = {
    username: String,
    password: String
}

const Users = mongoose.model('Users', schema)



route.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
}).post('/signup', (req, res) => {
    let SecurePassword = crypto.createHash('sha256').update(req.body.password).digest('hex')
    let user = new Users ({
        username: req.body.username,
        password: SecurePassword
    })
    user.save()
    res.send('User Created successfully')


})


module.exports = route 