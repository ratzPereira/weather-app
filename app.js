const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



//Mapbox API
geocode('las vegas', (error, data) => {
   console.log('Error', error)
   console.log('Data', data)
})


//Forecast
forecast(-75.7088, 44.1545, (error, data) => {
   console.log('Error', error)
   console.log('Data', data)
})