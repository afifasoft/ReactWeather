var express = require('express');
var request = require('request');

var OPEN_WEATHER_MAPURL = 'https://samples.openweathermap.org/data/2.5/weather?appid=c29caec9087904e7df982d10290acb59';

// create our app
var app = express();

app.use(express.static('public'));

// start the server
app.listen(3000, function () {
  console.log('Express Server is up on port 3000');
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
