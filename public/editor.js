canvas.onclick= (e) =>{
	const x = e.layerX
	const y = e.layerY
	for(let box of Canvas.beatBoxes){
		if(x>box.x && x<box.x+box.width && y>box.y && y<box.y+box.width){
			let selected = box.selected=!box.selected
		}
	}
	Canvas.drawBoxes()
}

function check(data) {
	const newArray = Canvas.bars.map(nm)
	function nm(e,i,a){
		if(JSON.stringify(e) === JSON.stringify(data)){
			return ''
		}else{
			return data
		}
	}
	console.log('ind',newArray.indexOf(""))

	newArray.splice(newArray.indexOf(""))
	if(newArray.indexOf("")!=-1){
		Canvas.bars=newArray

	}else{
		Canvas.bars.push(data)
	}
	console.log(newArray)


	return data
	
}