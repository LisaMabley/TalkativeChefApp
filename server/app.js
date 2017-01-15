var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//var voice = require('./public/voice/voicefunction') //check the file route is correct

//var favorites = require();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, './public')));

//putting in the voice recognition file
//app.use("/", voice)

//app.use('/', );

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.set('port', 3000);

app.listen(process.env.PORT || app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});
