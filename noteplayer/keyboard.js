document.onkeydown = function (e) {
	// e.preventDefault()
	// console.log(e.key)
	switch (e.key.toLowerCase()){
	case "1":
		TYPE = 1
		change()
		break
	case "2":
		TYPE = 1/2
		change()
		break
	case "3":
		TYPE = 1/4
		change()
		break
	case "4":
		TYPE = 1/8
		change()
		break
	case "5":
		TYPE = 1/16
		change()
		break
	case "a":
		if (e.ctrlKey) {
			SELECTEDNOTES=NOTES
		}
		break
	case "#":
		console.log(e.shiftKey)
		SELECTEDNOTES.forEach(item=>{
			if(LINEDATA[item.posy].text=="E" || LINEDATA[item.posy].text=="B"){
			if(item.hash!="b"){
				item.hash="b"
			}else{
				item.hash=""
			}
		}else if(LINEDATA[item.posy].text=="F" || LINEDATA[item.posy].text=="C"){
			if(item.hash!="#"){
				item.hash="#"
			}else{
				item.hash=""
			}
		}else if(LINEDATA[item.posy].text=="D" || LINEDATA[item.posy].text=="G" || LINEDATA[item.posy].text=="A"){
			if(item.hash.length==0){
				item.hash="#"
			}else if(item.hash=="#"){
				item.hash="b"
			}else if(item.hash=="b"){
				item.hash=""
			}
			
		}

		})
		break
	case "control":
		KEYBOARD.Control=e.ctrlKey
		break
	case "shift":
		if (KEYBOARD.Shift) {
			KEYBOARD.Shift=false

		} else {
			KEYBOARD.Shift=!false

		}
		// console.log(KEYBOARD)

		break
	case ".":
		if(DOT.length==0){
			DOT="*"
		}else{
			DOT=""
		}
		SELECTEDNOTES.forEach(item=>{
			item.dot=DOT
		})
		break
	case " ":
		id_play.click()
		break
	case "|":
		posx= Math.floor(MOUSEDATA.x/SPACE)+1
		if(!VLINES.includes(posx)){
			VLINES.push(posx)
		}else{
			VLINES.splice(VLINES.indexOf(posx),1)
		}
		break
	case "arrowup":
		SELECTEDNOTES.forEach(item=>{
			item.posy-=1
		})
		placheck()
		break
	case "arrowdown":
		SELECTEDNOTES.forEach(item=>{
			item.posy+=1
		})
		placheck()
		break
	case "arrowleft":
		SELECTEDNOTES.forEach(item=>{
			item.posx-=1
		})
		break
	case "arrowright":
		SELECTEDNOTES.forEach(item=>{
			item.posx+=1
		})
		break
	case "delete":
		if(JSON.stringify(SELECTEDNOTES)==JSON.stringify(NOTES)){
			NOTES=[]

		}else{
			SELECTEDNOTES.forEach(item=>{
				NOTES.splice(NOTES.indexOf(item),1)
			})

		}
		SELECTEDNOTES=[]
		break
	}
	function change() {
		SELECTEDNOTES.forEach(item=>{
			NOTES[NOTES.indexOf(item)].type=TYPE
		})
	}
  	Graphics.REFRESH()

}
function placheck(){
	if (SELECTEDNOTES.length==1) {

		const data = getkeys(42- SELECTEDNOTES[0].posy)
	  	let id = (data.id)-(octive_)
		playa(id)
	}
}

document.onkeyup = function (e) {
	switch (e.key.toLowerCase()){
	case "control":
		KEYBOARD.Control=!true
		break
	}
}