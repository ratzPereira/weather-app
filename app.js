const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



//Mapbox API
geocode('Las Vegas', (error, data) => {
   console.log('Error', error)
   console.log('Data', data)
   forecast(data.latitude, data.longitude, (error, data) => {
      console.log('Error', error)
      console.log('Data', data)
   })
})
