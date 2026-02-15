const express= require('express')
const {newUser}= require("../router/mbowatoken")
const route=express.Router()
var bodyParser = require('body-parser')
route.use(express.urlencoded({extended: true}))

route.use(bodyParser.json())


route.post("/",(req, res)=>{
        const body = req.body
        // console.log(res)
        const username=newUser().username
  	const password=newUser().password
  	console.log(body)
        // res.json({username:username,password:password});
        res.send(username);
        // res.cookie(username,username)
        // res.redirect('http://mbozwa.spot/login')


});

module.exports = route
