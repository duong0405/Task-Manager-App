const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=660eb56fec89286baa97ba530fd86f3d&query=" + latitude + "," + longitude;

    request({url, json:true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services!");
        }
        else if (body.error) {
            callback("Unable to find location", undefined);
        }
        else {
            const data = body.current;
            callback(undefined, data.weather_descriptions + ". It is currently " + data.temperature + " degree, but feels like " + data.feelslike + " degree");
        }
    })
}

module.exports  = forecast;