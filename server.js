let express = require('express');
let app = express();
let bodyParser = require('body-parser');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index0.html');
});

app.get('/resume', function(req, res){
  res.sendFile(__dirname + '/client/index-1.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/client/index-2.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/client/index-3.html');
});

app.get('/projects', function(req, res){
  res.sendFile(__dirname + '/client/index-4.html');
});

app.use(express.static('client'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function(){
  console.log("conectado hijodeputa....")
});
