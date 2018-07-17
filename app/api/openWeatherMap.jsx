var axios = require('axios');

const OPEN_WEATHER_MAPURL = 'https://samples.openweathermap.org/data/2.5/weather?appid=c29caec9087904e7df982d10290acb59';

// c29caec9087904e7df982d10290acb59

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    console.log(encodedLocation);
    console.log(location);
  //  var requestUrl = '${OPEN_WEATHER_MAPURL}&q=${encodedLocation}';

    var requestUrl = 'http://localhost:3000/getData?' + 'city=' + encodedLocation;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      console.log(res);
      console.log(res.data.cod);
      if(res.data.cod && res.data.sys.message){
        return res.data.main.temp;
      } else {
        throw new Error(res.data.sys.message);
      }
    }, function (res) {
        throw new Error(res.data.sys.message);
    });
  }
}
