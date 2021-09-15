const express = require("express");
const path = require("path");
const ejs = require("ejs");
const request = require("request");
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Phuong Duong"
    }); 
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        name: "Phuong Duong"
    });
})

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide  an address"
        })
    }

	geocode(req.query.address, (error, {latitude, longitude, location}) => {
		if (error) {
			return res.send({error});
		}
	
		forecast(latitude, longitude, (error, forecaseData) => {
			if (error) {
				return res.send({error});
			}

			res.send({
				address: req.query.address,
				location,
				forecase: forecaseData
			})
		})
	})
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Phuong Duong"
    });
})

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Phuong Duong",
        error: "Help article not found."
    });
})

app.get("/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Phuong Duong",
        error: "Page not found"
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})