const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv.slice(2)

if (address.length === 0) {
   return console.log('Please insert one valid location name')
} else {

   geocode(address, (error, { latitude, longitude, location} = {}) => {
   if(error){
       return console.log(error)  //if we had an error the function stops here because we have "return"
   }

      forecast(latitude, longitude, (error, forecastData) => {
         if(error){
            return console.log(error)  //if we had an error the function stops here because we have "return"
         }
         console.log(location)
         console.log(forecastData)
      })
   })
}

