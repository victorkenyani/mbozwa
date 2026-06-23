const menu = document.querySelector("header")
let isPaused = false
function LOADBUTTONS(){
	const playbutton = document.createElement("button")
	playbutton.innerText="PLAY"
	playbutton.id="PlayButton"
	menu.append(playbutton)
	const clearbutton = document.createElement("button")
	clearbutton.innerText="Clear"
	clearbutton.id="ClearButton"
	clearbutton.onclick=()=>{
		NOTES=[]
		NOTES2=[]
		SELECTEDNOTES=[]
		Stop()
		Canvas_class.Update()
	}
	menu.append(clearbutton)
	const Forcebutton = document.createElement("button")
	Forcebutton.innerText="**%$##"
	Forcebutton.id="ForceButton"
	Forcebutton.onclick=()=>{
		forceScreen() 
	}
	menu.append(Forcebutton)
	


}
LOADBUTTONS()
let scroleposx=0

PlayButton.onclick = function(argument) {
	exitEdit()
	if (this.style.backgroundColor=="") {

		this.style.backgroundColor="#00ff00"
		scroleposx = Screen.scrollLeft
		Screen.scrollLeft=0

		Next()
	} else {
		Screen.scrollLeft=scroleposx
		Stop()
	}
}

function PLAYERCLASS(callback){
	this.timeout=0
	this.timeouts={}
	
	this.Start=(duration)=>{
		this.timeout=setTimeout(function() {
			callback()
		}, 1000 * duration);
	}
	this.Play=(id, duration)=>{
		this.timeouts[id]=setTimeout(function() {
			KEYUP(id)
		}, 1000 * duration);

	}
	this.Stop=()=>{
		clearTimeout(this.timeout)
	}
	
}
const Player = new PLAYERCLASS(Next)

function Next(){
	if(!isPaused){
		let minduration=0xffff
		ANIMATIONSTEP -= 1
		pos = 0
		NOTES.forEach(item=>{
			if(item.x+ANIMATIONSTEP == 4){
				let minduration2 = item.type
				minduration=Math.min(minduration,minduration2)
				if(item.dot!=undefined){
					if(item.dot.length!=0){
						minduration+=minduration/4
					}
				}
				let id = (item.data.id)
				id=((LINEDATA.length*2)- getkeys(item.y).id)
				pos = ((LINEDATA.length/2)-item.y)+(7 * 3)
				id =  getkeys(pos).id
				if(item.hash!=undefined){
					if(item.hash=="#"){
						id+=1
					} else if(item.hash=="b"){
						id-=1
					}
				}

				KEYDOWN(id)
				item.color="red"
				minduration*=1.5

				Player.Play(id,(minduration))
				// console.log(id, pos)
			}

		})
		if(minduration==0xffff){
			Player.Start(0)
		}else{
			Player.Start(minduration * 2)
		}
		if(get_LASTNOTE()+ANIMATIONSTEP==3){
			PlayButton.click()
		}
	}
	Canvas_class.Update()
}
function Stop(){
	Player.Stop()
	ANIMATIONSTEP=0
	PlayButton.style.backgroundColor=""
	Canvas_class.Update()
	document.querySelectorAll(".keys").forEach(keys=>{
		keys.style.backgroundColor=""

	})
	NOTES.forEach(item=>{
		item.color="black"
	})
}
function Pause(){
	isPaused=!isPaused
	if(isPaused) ANIMATIONSTEP+=1
	Next()
}


