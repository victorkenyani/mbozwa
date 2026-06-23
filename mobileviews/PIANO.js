const PIANO = document.querySelector('footer')
let pianokecount= 52
function makekeys() {
	let key_width = 40
	let B_width = key_width/4
	const spc = key_width/20
	for (var i = 0; i < pianokecount; i++) {
		data = getkeys(i)
		keys = document.createElement("button")
		keys.className = "keys white"
		keys.id=data.id
		keys.title=`id:${data.id}, octive:${data.octive}`
		keys.textContent = data.text
		style=keys.style
		style.left=`${i* key_width}px`
		style.width=`${ key_width-spc}px`
		keys.onpointerdown = function(){
			KEYDOWN(this.id)
		}

		keys.onpointerup = function(){
			KEYUP(this.id)
		}
		PIANO.append(keys)

	}
	for (var i = 0; i < pianokecount-1; i++) {
		data = getkeys(i)

		keys = document.createElement("button")
		keys.className = "keys black"
		keys.id=data.id+1
		keys.title=`id:${data.id}, octive:${data.octive}`
		keys.textContent = `${data.text}#`
		style=keys.style
		style.left=`${( key_width/2)+(B_width/2) + i* key_width}px`
		style.width=`${( key_width-spc) - B_width}px`
		keys.onpointerdown = function(){
			KEYDOWN(this.id)
		}

		keys.onpointerup = function(){
			KEYUP(this.id)
		}
		if(!data.text.includes("E") && !data.text.includes("B")){
			PIANO.append(keys)
		}


	}
}

makekeys()
PIANO.scrollLeft = PIANO.scrollLeftMax/2

function KEYDOWN(id){
	playa(id)
	document.getElementById(id).style.backgroundColor =("red")
}
function KEYUP(id){
	document.getElementById(id).style.backgroundColor =("")
}