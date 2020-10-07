const request = require('request');


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=b07e17544ba318a54b709a0b75ff26ca'

request({ url: url }, (error, response) => {
   // console.log(response); we get everything printed

   const data = JSON.parse(response.body);

   //console.log(data) we get all the body data

   console.log(data.current);  // we get the current information 

});