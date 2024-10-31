let headers = new Headers();

headers.append("Content-Type", "application/json");

headers.append("Authorization", "Bearer i5i1a22PMc0mlKsCW2PrGnSejxAE");


fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {

  method: 'POST',

  headers,

  body: JSON.stringify({

    "BusinessShortCode": 174379,

    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQxMDMxMjEyNDQ4",

    "Timestamp": "20241031212448",

    "TransactionType": "CustomerPayBillOnline",

    "Amount": 1,

    "PartyA": 254793465937,

    "PartyB": 174379,

    "PhoneNumber": 254793465937,

    "CallBackURL": "https://mydomain.com/path",

    "AccountReference": "CompanyXLTD",

    "TransactionDesc": "Payment of X" 

  })

})

  .then(response => response.text())

  .then(result => console.log(result))

  .catch(error => console.log(error));
