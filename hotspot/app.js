const express = require('express')
const app = express()
const reload = require('reload')
var bodyParser = require('body-parser')
const fs = require("fs")
const server = require('http').Server(app)
const port = process.env.PORT || 3000;

app.set('trust proxy', true);
app.use(express.static("./home"))
app.use(bodyParser.json()) 
app.get("/",(req, res)=>{
	res.send("welcome to luche")
})
app.get('/get-ip', (req, res) => {
  const clientIp = req.ip; // This will now hold the client's actual IP
  res.json({ ip: clientIp });
});
app.post("/",(req, res)=>{
	res.json({data:"rerrtr"})
});
app.use("/request",require("./router/request"))
reload(app).then(function (reloadReturned) {
	
	}).catch(function (err) {
	  console.error(err) 
})


server.listen(port, () =>{
	console.log(`http://localhost:${port}`)
})

