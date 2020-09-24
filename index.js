// const http = require('http')

const express = require("express")
const path = require("path")
const fetch = require("node-fetch")

// const hostname = "1213c49718ca.ngrok.io"
const hostname = "parent.magnoliatree.net"
// const apiUrl = "https://api-4ff4f23f.eu.v2.we-stats.com/api/v6/score"
const apiUrl = "https://api-dab0bb57.us.v2.we-stats.com/api/v6/score?cid=icemantest"
const app = express()
const router = express.Router()

express.static("./src")

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"))
});

app.get("/getScore", function (req, res) {
    body = { "action": "getScore", "activityAmountTotal": "400.00", "activityName": "GUEST_PAYMENT", "customerID": "dummy", "customerSessionID": "iframecsid", "IP": req.ip, "platformType": "WEB", "solution": "AO", "uuid": "no_uuid", "yearOfBirth": 1970 }

    fetch(apiUrl, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(`<pre style="font-size:smaller">${JSON.stringify(json, null, 3)}</pre>`))
})

app.use(function (req, res) {
  res.sendFile(path.join(__dirname + "/src/" + req.path))
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

console.log(`Server running at http://${hostname}:${port}/`)
