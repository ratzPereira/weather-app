const request = require('request');


// const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=b07e17544ba318a54b709a0b75ff26ca&units=metric'



// request({ url: url, json: true }, (error, response) => {    // by adding json: true, the response will be already an object. we dont need to parse it

//    //deal with errors´
//    if(error){
//       console.log('Unable to connect to weather service!')
//    } else if (response.body.message === 'Nothing to geocode') {
//       console.log('Unable to find location')
//    } else {
//       console.log(response.body.current.weather[0].description + '. It is currently ' + response.body.current.temp + ' degrees out! There is a ' + response.body.current.humidity +
//                ' % of humidity')
//    }

//    // console.log(response); we get everything printed
//    //const data = JSON.parse(response.body); // without json: true
//    //console.log(data) we get all the body data
//    //console.log(data.current);  // we get the current information 
//    //console.log(response.body.current)
// });



//   >>MapBox API<<

// const locationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmF0eiIsImEiOiJja2Z6bTluaHAwNGllMnpxcTljeDgxMWljIn0.XMlKn48-c8EkHMF7vQNB9w'

// request({url: locationURL, json: true}, (error,response) =>{

//    if (error){
//       console.log('Unable to connect to weather service!')
//    } else if (response.body.message === 'Not Found') {
//       console.log('Unable to find location')
//    } else {
//       const latitude = response.body.features[0].center[1];
//       const longitude = response.body.features[0].center[0];
//       const place = response.body.features[0].place_name;

//       console.log('Current location is: ' + place + ' and the coordinates are: ' + latitude + ' and ' + longitude);
//    }
   

// });



const geocode = (address, callback) => {
   const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmF0eiIsImEiOiJja2Z6bTluaHAwNGllMnpxcTljeDgxMWljIn0.XMlKn48-c8EkHMF7vQNB9w'

   request ({ url: url, json: true}, (error,response) => {
      if (error){
         callback('Unable to connect to weather service!', undefined) // we dont need to pass undefined here as the second arg
      } else if (response.body.features.length === 0) {
         callback('Unable to find location', undefined) // we dont need to pass undefined here as the second arg
      } else {
         callback(undefined, {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
         })
      }
   })


}

geocode('las vegas', (error, data) => {
   console.log('Error', error)
   console.log('Data', data)
})