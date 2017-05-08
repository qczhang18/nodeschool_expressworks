var express = require('express')
var app = express()
var path = require('path');
var bodyparser = require('body-parser')


app.listen(process.argv[2])


app.use(bodyparser.urlencoded({extended: false}))

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})


app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
})


app.set('views', path.join(__dirname, 'templates'))

app.set('view engine', 'pug')


app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
