

function createToken(phone, amount) {
  let headers = new Headers();

  headers.append("Authorization", "Basic TEZNR0VzUkpRR3VxSkdDUDhvM0d2RVJUUUdDV29XckRxUUFxdjdxb3VGODk1NDd3OnJ6Z2NneWtOcFQxMzFVcDJqWkZYWlJTVHREY2w5aU5KN0YzYW5KeGVYdDNZUWt4WjY3enJESnMwdEo3QXFOR3I=");

  fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",  { headers })

  .then(response => response.text())

  .then(result => {
  console.log(result)
  const tokens = JSON.parse(result).access_token;
  console.log(tokens)
  stkPush(tokens, phone, amount);
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



function stkPush(tokens, pn, amnt){

  const Shortcode = 174379;
  const Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
  const phn= Number(pn)
  
  const mPassword = btoa (Shortcode+Passkey+timestamp());//(Shortcode+Passkey+timestamp()).toString("base64");

  let headers = new Headers();
  
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer "+tokens);
  
  fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {

  method: 'POST',

  headers,

  body: JSON.stringify({

    "BusinessShortCode": Shortcode,

    "Password":mPassword,

    "Timestamp": timestamp(),

    "TransactionType": "CustomerPayBillOnline",

    "Amount": amnt,

    "PartyA": pn,

    "PartyB": Shortcode,

    "PhoneNumber": pn,

    "CallBackURL": "https://mydomain.com/path",

    "AccountReference": "Mbozwa",

    "TransactionDesc": "Testing stk push" 

  })

})

  .then(response => response.text())

  .then(result => console.log(result))

  .catch(error => console.log(error));
  
}

createToken(254721173446,10)



