
Login.style.display=''//"none"
Logo.style.display="none"

function payBTN(argument) {
	var amount = 0, phone = 0
	const btns = document.querySelectorAll(".pay")
	btns.forEach(btn=>{
		btn.onclick = function(){
			amount = Number(this.innerText.replace("/-",""));
			phone = window.prompt("PHONE Number", "254721173446");
			if (phone.length>9) {
				send2(amount,phone)				

			} else {
				window.alert("error")
				return
			}
		}

	})
}


function send(amount,phone){
  const data={
    method:"post",
    headers:{
        "content-type":"application/json",
        "Authorization": `Bearer ${"blank"}`
        },
        body:JSON.stringify({amount:amount, phone:phone})
    }
  fetch("http://192.168.6.2:3000/voucher",data).then(response=>{
    if(response.ok){
      return response.json()
    }

  }).then(value=>{
    console.log(value)
  	const mdata=value
  	id=mdata.username
  	up=mdata.password
  	Username.value=id
  	Password.value=up
	Login.style.display=""
	Pay.style.display="none"

  	// console.log(id, up)

  }).catch(error=>{console.log(error)})
}
function send2(amount,phone){
  Phone.value=phone
  Amount.value=amount
  Send_.submit()

}
function getip(){
	const u = 'https://mbozwa.onrender.com/get-ip'
	fetch('/get-ip').then(response=>{
		if(response.ok) return response.json()
	}).then(value=>{
		console.log(value)
	}).catch(error=>{console.log(error)})
}

getip()
payBTN()