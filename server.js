var express = require('express');
var request = require('request');

var OPEN_WEATHER_MAPURL = 'https://samples.openweathermap.org/data/2.5/weather?appid=c29caec9087904e7df982d10290acb59';

// create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    response.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

// start the server
app.listen(PORT, function () {
  console.log('Express Server is up on port '+ PORT);
});


app.get('/getData', function (req, res) {
  var city = req.query.city;
  console.log(city);

  var requestUrl = OPEN_WEATHER_MAPURL+'&q='+city;



  console.log(requestUrl);


  request(requestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
})
})
