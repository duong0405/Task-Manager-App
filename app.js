const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=660eb56fec89286baa97ba530fd86f3d&query=Hanoi";

request({ url: url, json: true }, (error, response) => {
	if (error) {
		console.log("Unable to connect to weather service!");
	} else if (response.body.error) {
		console.log("Unable to find location.");
	} else {
		const data = response.body.current;
		console.log("temperature: " + data.temperature);
		console.log("feelslike: " + data.feelslike);
	}
});
