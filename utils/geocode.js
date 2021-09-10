const request = require("request");

const geocode = (address, callback) => {
	const url = "http://api.positionstack.com/v1/forward?access_key=e3ba2d3920324732669b15df68cccfab&query=" + encodeURIComponent(address) + "&limit=1";

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (response.body.error) {
			callback("Unable to find location. Try another search.", undefined);
		} else {
			callback(undefined, {
				latitude: response.body.data[0].latitude,
				longitude: response.body.data[0].longitude,
				location: response.body.data[0].region
			})
		}
	})
}

module.exports = geocode;
