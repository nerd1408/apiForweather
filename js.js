const express = require("express");
const https = require ('https')
const fetch = require('node-fetch');
 const app = express();

//  app.get('/',function(req,res) {
//      const url = "https://community-open-weather-map.p.rapidapi.com/weather?q=India&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml"
//     https.get(url,function (response) {
//         console.log(response.statusCode);
//         response.on('data',function (data) {
//             const weatherdata=JSON.parse(data);
//             console.log(weatherdata);
//         })
//     })
//  res.send('server is running')
//  });

app.get('/', async (req, res) => {
    const url = "https://community-open-weather-map.p.rapidapi.com/weather?q=India&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml"
    const response = await fetch(url, {
        method:'get',
        headers:{"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com", "x-rapidapi-key": "e91faa4934mshcea23a2ee569dbap114880jsnba257dc25e70"}
    });
    console.log(response.status)
    res.send(response.body)
})



 app.listen(9500,function (req,res) {
    console.log(`the server has started at port 9500`);
})