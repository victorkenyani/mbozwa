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

app.use("/request",require("./router/request"))
app.use("/addUser",require("./router/addUser"))
reload(app).then(function (reloadReturned) {
	
	}).catch(function (err) {
	  console.error(err) 
})


server.listen(port, () =>{
	console.log(`http://localhost:${port}`)
})

