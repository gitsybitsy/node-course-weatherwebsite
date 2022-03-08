const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=464f7d27ccbec9bb528d10d0bfb41370&query=' + lat + ',' + long
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, {
                data:  'it is currently ' + body.current.temperature + ' and feels like ' + body.current.feelslike + ' and the humidity is ' + body.current.humidity
            })
        }
    })
}

module.exports = forecast