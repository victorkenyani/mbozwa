let TEMPNOTE=""

canvas.onmousemove = function(e) {
	data = process_data(e)
		// console.log(data)
	Graphics.REFRESH()
}

function process_data(e){
	try{
		MOUSEDATA.x=e.layerX
		MOUSEDATA.y=e.layerY
		MOUSEDATA.posx= Math.floor(MOUSEDATA.x/SPACE)
		posy = Math.floor(canvas.height/(GAP) - MOUSEDATA.y/(GAP))
		data = LINEDATA[posy]
		MOUSEDATA.text = data.text
		MOUSEDATA.line=data.Line
		MOUSEDATA.type=TYPE
		MOUSEDATA.hash=data.hash
		MOUSEDATA.posy=data.y
		
		return MOUSEDATA

	}catch(e){}

}

canvas.onclick = function(e) {
	// let data = process_data(e)
	posx= Math.floor(MOUSEDATA.x/SPACE)
	posy = Math.floor(canvas.height/(GAP) - MOUSEDATA.y/(GAP))
	const data = LINEDATA[posy]
	if(posx>Math.floor(canvas.width/SPACE)-3){
		Graphics.WIDTH+=SPACE*2
		holder.scrollLeft=holder.scrollLeftMax 
		// Graphics. += 
	}
	if (posx > 3) {
		data2 ={}
		data2.posy=data.y
		data2.posx = posx

		// }else if(ANIMATIONSTEP>0){
		// 	data2.posx = posx - (ANIMATIONSTEP)
		// }else{
		// 	data2.posx = posx + (ANIMATIONSTEP)
		// }
		data2.type = TYPE
		data2.hash = data.hash
		data2.double = KEYBOARD.Control
		data2.dot =DOT
		data2.line=data.Line
		data2.NOTE=KEYBOARD.Shift
		KEYBOARD.Shift=true
		exist_ = exist(data2)	
		if (!exist_.exist && SELECTEDNOTES.length==0) {
			NOTES.push(data2)
		}else{
			TEMPNOTE=exist_.item
		}
		if(KEYBOARD.Control){
			SELECTEDNOTES.push(TEMPNOTE)
		}else{
			SELECTEDNOTES=[]
		}

	}else if (posx==3){
		
		if(LINEDATA[posy].text=="E" || LINEDATA[posy].text=="B"){
			if(LINEDATA[posy].hash!="b"){
				LINEDATA[posy].hash="b"
			}else{
				LINEDATA[posy].hash=""
			}
		}else if(LINEDATA[posy].text=="F" || LINEDATA[posy].text=="C"){
			if(LINEDATA[posy].hash!="#"){
				LINEDATA[posy].hash="#"
			}else{
				LINEDATA[posy].hash=""
			}
		}else if(LINEDATA[posy].text=="D" || LINEDATA[posy].text=="G" || LINEDATA[posy].text=="A"){
			if(LINEDATA[posy].hash.length==0){
				LINEDATA[posy].hash="#"
			}else if(LINEDATA[posy].hash=="#"){
				LINEDATA[posy].hash="b"
			}else if(LINEDATA[posy].hash=="b"){
				LINEDATA[posy].hash=""
			}
			
		}
		LINEDATA.forEach(item=>{
			if (LINEDATA[posy].text==item.text) {
				item.hash=LINEDATA[posy].hash
			}
		})
	}
	Graphics.REFRESH()
}

canvas.ondblclick = function(e) {
	// console.log(TEMPNOTE)
	SELECTEDNOTES[0]=TEMPNOTE
	const data = getkeys(42- TEMPNOTE.posy)
  let id = (data.id)-(octive_)
	playa(id)
	Graphics.REFRESH()
	
}

function exist(data){
	exist_=false
	let item_=''
	for (var i = 0; i < NOTES.length; i++) {
		data1 = NOTES[i]
		if (data.posy==data1.posy && data.posx == data1.posx) {
			exist_=true
			item_=data1
		}
	}
	
	return {exist:exist_, item:item_}
}

canvas.onload = function(e){
  console.log(e)
}