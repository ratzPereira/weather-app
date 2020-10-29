const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv.slice(2)

if (address.length === 0) {
   return console.log('Please insert one valid location name')
} else {

   geocode(city, (error, data) => {
   if(error){
       return console.log(error)  //if we had an error the function stops here because we have "return"
   }

      forecast(data.latitude, data.longitude, (error, forecastData) => {
         if(error){
            return console.log(error)  //if we had an error the function stops here because we have "return"
         }

         console.log(data.location)
         console.log(forecastData)
      })
   })
}

