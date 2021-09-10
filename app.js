const request = require("request");
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast");

geocode("Hanoi", (error, data) => {
	console.log("Error", error);
	console.log(data);
})

forecast(21.0245, 105.8411, (error, data) => {
	console.log(error);
	console.log(data);
})
