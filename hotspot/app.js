const express = require('express')
const app = express()
const reload = require('reload')
var bodyParser = require('body-parser')
const fs = require("fs")
const server = require('http').Server(app)
const port = process.env.PORT || 3000;


app.use(express.static("./home"))
app.use(bodyParser.json()) 
app.get("/",(req, res)=>{
	res.send("welcome to luche")
})

async function getAccessToken() {
  const consumer_key = ""; // REPLACE IT WITH YOUR CONSUMER KEY
  const consumer_secret = ""; // REPLACE IT WITH YOUR CONSUMER SECRET
  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = "Basic TEZNR0VzUkpRR3VxSkdDUDhvM0d2RVJUUUdDV29XckRxUUFxdjdxb3VGODk1NDd3OnJ6Z2NneWtOcFQxMzFVcDJqWkZYWlJTVHREY2w5aU5KN0YzYW5KeGVYdDNZUWt4WjY3enJESnMwdEo3QXFOR3I"
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
   
    const dataresponse = response.data;
    // console.log(data);
    const accessToken = dataresponse.access_token;
    return accessToken;
  } catch (error) {
    throw error;
  }
}
app.post("/access_token", (req, res) => {
  getAccessToken()
    .then((accessToken) => {
      res.send("😀 Your access token is " + accessToken);
    })
    .catch(console.log);
});

app.use("/request",require("./router/request"))
reload(app).then(function (reloadReturned) {
	
	}).catch(function (err) {
	  console.error(err) 
})


server.listen(port, () =>{
	console.log(`http://localhost:${port}`)
})

