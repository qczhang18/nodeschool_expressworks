var express = require('express')
var app = express()
var path = require('path');
var bodyparser = require('body-parser')


app.listen(process.argv[2])

app.use(bodyparser.urlencoded({extended: false}))

app.get('/search', function (req, res){
    var results = req.query;
    res.send(results);
})

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
