const box = document.getElementsByClassName("box")
const leb = document.getElementsByClassName("label")
for(let plan of box){
	plan.addEventListener('click', selected_plan)
}
for(let plan of leb){
	plan.addEventListener('click', selected_plan)
}

let phone_number=''
let amount_ = ''

function selected_plan(e) {
	console.log(e.target.innerText)
	let phone = window.prompt("ENTER MPESA PHONE NUMBER FOR "+e.target.innerText.replace("Buy Plan",'')," 254")
	console.log (phone)
	phone_number=phone
	switch(e.target.id){
	case "box1":
		amount_=10
		// console.log(10)
	break;
	case "box2":
		amount_=20
		// console.log(20)
	break;
	case "box3":
		amount_=50
		// console.log(50)
	break;
	case "box4":
		amount_=100
		// console.log(100)
	break;
	}
	// createToken()
  sendtoserver(phone_number,amount_)
}


function sendtoserver(phone, amount){
  const data={
    method:"post",
    headers:{
      "content-type":"application/json",
      "Authorization": `Bearer ${"blank"}`
    },body:JSON.stringify({PHONE:phone, AMOUNT:amount})
  }
  const body1 = {body:JSON.stringify({PHONE:phone, AMOUNT:amount})};
  console.log (body1)
  fetch("/createvoucher",data).then(response=>{
    if(response.ok){
      return response.json()
    }

  }).then(value=>{
  	console.log(value)

  }).catch(error=>{})
}
sendtoserver("077665","100")




