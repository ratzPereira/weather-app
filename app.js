const request = require('request');


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=b07e17544ba318a54b709a0b75ff26ca&units=metric'

request({ url: url, json: true }, (error, response) => {    // by adding json: true, the response will be already an object. we dont need to parse it
   // console.log(response); we get everything printed

   //const data = JSON.parse(response.body); // without json: true

   //console.log(data) we get all the body data

   //console.log(data.current);  // we get the current information 

   console.log(response.body.current)

   console.log(response.body.current.weather[0].description + '. It is currently ' + response.body.current.temp + ' degrees out! There is a ' + response.body.current.humidity +
    ' % of humidity')



});