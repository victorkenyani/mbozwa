Canvas_class.Canvas.onmousemove = function (e) {
	
	x = Math.floor(e.layerX / STEP)
	y = Math.floor(e.layerY / (GAP * 0.5))
	try {
		const data = LINEDATAR[y + 1]
		if (x >= 5 && (x < (Canvas_class.Canvas.width / STEP) - 1)) {
			NOTE.x = x
			NOTE.y = y
			NOTE.type=0
			NOTE.data=data
		}else{
			NOTE={}
		}
		// console.log(y, data.text)
	} catch (e) { }
	Canvas_class.Update()
}

Canvas_class.Canvas.onmousedown = function (e) {

	x = Math.floor(e.layerX / STEP)
	y = Math.floor(e.layerY / (GAP * 0.5))

	try {
		const data = LINEDATAR[y + 1]
		// console.log(x,(Canvas_class.Canvas.width/STEP))
		if (x > (Canvas_class.Canvas.width / STEP) - 2) {
			console.log(y, x, data.text)
			Canvas_class.Width += (STEP * 2)
		}
		const newNOTE = {}
		newNOTE.x = NOTE.x
		newNOTE.y = NOTE.y
		newNOTE.type = TYPE
		newNOTE.hash = HASH
		newNOTE.color = "black"
		newNOTE.dot = DOT
		newNOTE.data=data
		const check=CHECK(newNOTE)
		if (check.exist) {
			if(e.ctrlKey){
				check.item.color="green"
				SELECTEDNOTES.push(check.item)
			}
			// console.log(check.itemPos)
		} else {
			if(SELECTEDNOTES.length==0){

				NOTES.push(newNOTE)
			}

		}
	} catch (e) { }

	HASH=''
	DOT=""
    if(!e.ctrlKey){
	    exitEdit()
    }
	Canvas_class.Update()

}

function CHECK(note){
	let newitem = {}
	let exist=false
	let itemp=0, i=0
	NOTES.forEach(item=>{
		if (JSON.stringify(item.x).includes(JSON.stringify(note.x)) && JSON.stringify(item.y).includes(JSON.stringify(note.y))) {
			exist=true
			newitem=item
			itemp=i
		} else {

		}
		i++
	})
	return {item:newitem, exist:exist, itemPos:itemp}
}

function exitEdit(){
    // if(!e.ctrlKey){

		if(SELECTEDNOTES.length!=0){
    		SELECTEDNOTES.forEach(item=>{
    			item.color="black"
    		})
    		SELECTEDNOTES=[]
    	}
    // }
}

