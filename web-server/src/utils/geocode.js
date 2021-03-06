const request = require('request')

//Mapbox API

const geocode = (address, callback) => {
   const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmF0eiIsImEiOiJja2Z6bTluaHAwNGllMnpxcTljeDgxMWljIn0.XMlKn48-c8EkHMF7vQNB9w'

   request ({ url, json: true}, (error, {body}) => {
      if (error){
         callback('Unable to connect to weather service!', undefined) // we dont need to pass undefined here as the second arg
      } else if (body.features.length === 0) {
         callback('Unable to find location', undefined) // we dont need to pass undefined here as the second arg
      } else {
         callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
         })
      }
   })
}

module.exports = geocode