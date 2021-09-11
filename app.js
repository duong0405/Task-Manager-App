const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

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
    console.log("Server is runining on port 3000");
})