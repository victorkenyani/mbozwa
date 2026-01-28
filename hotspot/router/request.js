const express= require('express')
const route=express.Router()

route.post("/",(req, res)=>{
	data = req.body
	createToken(data.PHONE, data.AMOUNT,res)
})
let phone_number=""
let amount_=""
function createToken(phone_number_,amount,res) {
  amount_=Number(amount.toString().replaceAll(" ",""))
	phone_number=Number(phone_number_.toString().replaceAll(" ",""))
  console.log(phone_number,amount_)
  // i just copy pasted this syntax. i think kila mtu ako na yake unique juu its about authentication
  let headers = new Headers();

  headers.append("Authorization", "Basic TEZNR0VzUkpRR3VxSkdDUDhvM0d2RVJUUUdDV29XckRxUUFxdjdxb3VGODk1NDd3OnJ6Z2NneWtOcFQxMzFVcDJqWkZYWlJTVHREY2w5aU5KN0YzYW5KeGVYdDNZUWt4WjY3enJESnMwdEo3QXFOR3I=");

  fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",  { headers })

  .then(response => response.text())

  .then(result => {
  //console.log(result)
  let tokens = JSON.parse(result).access_token;
  console.log(tokens)
  stkPush(tokens,res);
  })

  .catch(error => console.log(error));

}

function timestamp(){
    const date = new Date();
    
    const mtimestamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    
    return mtimestamp;

}

function stkPush(tokens,res){

  // i copy pasted and edited few things
  const Shortcode = 174379;// darajas paybill
  const Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'//edit yous here
  const phn= phone_number;// edit yours juu hii ni ya vichita
  
  const mPassword = btoa (Shortcode+Passkey+timestamp()); //this is a base64 string 4mat.... walai it took me 2days kufind >>>"btoa"<<<<.... nilichoka after finding its 4letters 

  let headers = new Headers();
  
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer "+tokens); // hio tokens i borrowd it from authentication ya hapo kwa create tokens

// Halafu ki promise kina dundaing stairo hii.. hahaha javascrpt ni language ya kingiza denge box na promises za zakayo. ati  I vow to fetch url and return with Money ya salon
  
  fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {

  method: 'POST',

  headers,

  body: JSON.stringify({

    "BusinessShortCode": Shortcode,

    "Password":mPassword,

    "Timestamp": timestamp(),

    "TransactionType": "CustomerPayBillOnline",

    "Amount": amount_,

    "PartyA": phn,

    "PartyB": Shortcode,

    "PhoneNumber": phn,

    "CallBackURL": "https://mydomain.com/path",

    "AccountReference": "Mbozwa",

    "TransactionDesc": "Testing stk push" })
  }).then(response => response.json()).then(result =>{
    console.log(result)
    res.json(result)
  }).catch(error => console.log(error))
}

module.exports = route
