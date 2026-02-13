const express = require('express');
var bodyParser = require('body-parser')
const reload = require('reload')

const hostname = "localhost";
const port = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);

app.use(express.static("./home"))
app.use(bodyParser.json());
app.set('trust proxy', true); 
app.get('/get-ip', (req, res) => {
  const clientIp = req.ip; // This will now hold the client's actual IP
  res.json({ ip: clientIp });
});
app.get("/",(req, res)=>{
    console.log(req.originalUrl)
        
        const clientIp = req.ip; // This will now hold the client's actual IP
        console.log({ ip: clientIp });
        res.send('trdytdy');

});

app.post("/",(req, res)=>{
        const body = req.body
        res.json({token:"234567ertyu"});
});

app.use("/voucher", require("./router/voucher"))
reload(app).then(function (reloadReturned) {
  
  }).catch(function (err) {
    console.error(err) 
});

server.listen(port,()=>{
        console.log(`http://localhost:${port}`);
});

