const mbozwa_html0 = `
<div id="screens">
        <head>
              
        </head>
        <main>
            <button title="1" class="prices">10/-</button>
            <button title="2" class="prices">20/-</button>
            <button title="6" class="prices">30/-</button>
            <button title="12" class="prices">100/-</button>
            <button title="24" class="prices">200/-</button>
            
        </main>
        <footer>
            contacts
        </footer>
    </div>


`
const mbozwa_html = `
<div id="screens">
        <form name="login" action="http://192.168.6.254:3000/addUser/enable" method ="post">
                    <input type="hidden" name="dst" value="" />
                    <input type="hidden" name="popup" value="true" />
                    
                    <label>
                        
                        <input name="username" type="text" placeholder="Username" />
                    </label>

                    <label>
                        
                        <input name="password" type="password" placeholder="Password" />
                    </label>

                    <input type="submit" value="Connect" />

                </form>
    </div>


`

Mbozwa.innerHTML = mbozwa_html
const addr = Mbozwa_address.innerText
const btns = document.querySelectorAll(".prices")
for(let btn of btns){
	btn.onclick = function(){
		console.log(this.title, addr)
		// pay(this.textContent, this.title)
		createToken(this.title)
	}

}

function createToken(time){
	// const url= `${document.URL}addUser/enable`
  const url= `http://192.168.1.107/addUser/enable`
	// const url= `http://192.168.88.253/addUser/enable`



  const data={
    method:"post",
    headers:{
      "content-type":"application/json",
      "Authorization": `Bearer ${"blank"}`
    },body:JSON.stringify({time:time})
  }
  fetch(url,data).then(response=>{
    if(response.ok){
      return response.json()
    }

  }).then(value=>{
    console.log(value)
  	/*const mdata=value
  	id=mdata.voucher.username
  	up=mdata.voucher.password
  	Username.value=id

  	console.log(id, up)*/

  }).catch(error=>{console.log(error)})

}