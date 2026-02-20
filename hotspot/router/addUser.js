// ===============================
// IMPORTS
// ===============================
const express= require('express')
// const route=express.Router()
const {newUser}= require("../router/mbowatoken")

const RouterOSClient  = require('node-routeros').RouterOSAPI;
const cors = require('cors');

const route=express.Router()

const reload = require('reload')
var bodyParser = require('body-parser')
const fs = require("fs")
// route.use(express.static("./home"))
route.use(bodyParser.json()) 
route.get("/",(req, res)=>{

  res.render("index")
})

route.post('/', (req, res)=>{
  //res.json({enter:"sharon"})
  

})

// ===============================
// MIKROTIK CONNECTION CONFIG
// ===============================
const routerConfig = {
  host: '154.159.237.96',
  user: 'admin',
  password: 'qwerty1234567890',
  port: 8728,
  timeout: 20000
  /*host: "10.0.3.1",     // MikroTik IP
  user: "admin",        // API user
  password: "password",
  port: 8728,   */        // API port
};


// ===============================
// HELPER: GENERATE RANDOM STRING
// ===============================
function randomString(length) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// ===============================
// VOUCHER GENERATION ENDPOINT
// ===============================
route.post('/enable', async (req, res) => {
  /*
    Expected body:
    {
      "minutes": 30
    }
  */

  // const { minutes } = req.body;
  const  data  = req.body;
  const  minutes  = 5//Number(data.time)
  console.log('minutes', minutes)
  if (minutes == null) {
    // return res.status(400).json({ error: "minutes is required" });
  }
  // Convert minutes → RouterOS format
  const uptimeLimit = `${minutes}m`;

  username=newUser().username
  password=newUser().password
  // res.json({user:username})
  //console.log(username, password)
  const conn = new RouterOSClient(routerConfig);

  try {
    // ===============================
    // 2️⃣ CONNECT TO MIKROTIK
    // ===============================
    const api = await conn.connect();

    // ===============================
    // 3️⃣ ADD HOTSPOT USER (VOUCHER)
    // ===============================
    await api.write("/ip/hotspot/user/add", [
      `=name=${username}`,           // voucher username
      `=password=${password}`,       // voucher password
      `=profile=default`,            // hotspot profile
      `=limit-uptime=${uptimeLimit}` // auto disconnect after time
    ]);


    // await api.write('/ip/hotspot/user/set', {
    //   numbers: username,
    //   disabled: 'no'
    // });

    // ===============================
    // 4️⃣ CLOSE CONNECTION
    // ===============================
    await api.close();

    // ===============================
    // 5️⃣ RETURN VOUCHER DETAILS
    // ===============================
    const voucher_={
      status: "voucher created",
      voucher: {
        username,
        password,
        valid_for_minutes: minutes
      }
    }
    console.log(voucher_)
    //res.redirect("http://mbozwa.spot/login2.html?"+username)
    res.json(voucher_);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function test() {
  try {
    const api = await RouterOSClient.connect();
    const res = await api.menu("/system/resource").get();
    console.log(res);
    await api.close();
  } catch (err) {
    console.error("API error:", err.message);
  }
}

test(); 

function append_newUser(){

}

module.exports = route
