const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&appid=b07e17544ba318a54b709a0b75ff26ca&units=metric'

    request ({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message === 'Nothing to geocode') {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather[0].description + '. It is currently ' + body.current.temp + ' degrees out! There is a ' + body.current.humidity + '% of humidity')
        }
    })
}

module.exports = forecast