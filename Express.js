var express = require('express')
var app = express()
var path = require('path');
var bodyparser = require('body-parser')


app.listen(process.argv[2])

app.use(require('stylus').middleware('public'))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
