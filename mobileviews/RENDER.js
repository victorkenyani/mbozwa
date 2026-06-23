const diameter = GAP * 0.4
let halfGap = GAP * 0.5
let quaterGap = GAP * 0.25
let fontsize = 10
var showText = false
let beats=4, beatsType = 4
function Draw(w, h) {

	halfGap = GAP * 0.5
	quaterGap = GAP * 0.25
	DrawFcleff(0, 14 * halfGap, STEP * 4, GAP * 8)
	DrawGcleff(0, 3 * halfGap, STEP * 4, GAP * 7)
	ctx.lineWidth =2
	staff(w, h)
	DrawVline(STEP * 4)
	DrawVline(STEP * 0.5)
	DrawVline(STEP * 0.75)
	DrawVline(w - (STEP * 0.5))
	DrawVline(w - (STEP * 0.75))
	ctx.lineWidth =1
	if (isMATRIRX) {
		DrawMATRIX(w, h)

	} else {
		DrawNotes()
		
	}
	DrawNote()
	DrawTimeSignature()
	// DrawGcleff(0, 0, 40, 40)

}


let NOTE = {}

function DrawNote() {
	ctx.beginPath()
	fontsize = 12
	x = NOTE.x * STEP
	y = NOTE.y * GAP / 2
	ctx.arc(x, y, GAP * 0.5, 0, 2 * Math.PI)
	try {
		ctx.fillStyle = "#808080"
		ctx.font = `${fontsize}px sans-serif`
		ctx.textAlign = 'center'
		ctx.fillText(NOTE.data.text+NOTE.x, x, y + fontsize / 2)
		ctx.font = "10px sans-serif"
	} catch (e) { }
	ctx.fillStyle = "#000000"


	ctx.stroke()
}

function staff(w, h) {
	for (let index = 0; index < LINEDATA.length * GAP; index += GAP) {
		let x = w - 20
		const ds = 20
		if (index >= 5 * GAP) {
			x = ds
		}
		y = (index + GAP) + h / 2
		Drawline(x, y)
		Drawline(ds, h / 2)
		y = (h / 2) - index - GAP
		Drawline(x, y)
	}
	for (let index = 0; index < LINEDATA.length; index += 2) {
		DrawText(index + 1, 10, index * halfGap)
		DrawText(index, w - 10, index * halfGap - (GAP * .5))
	}

}

function DrawVline(x) {
	ctx.beginPath()
	ctx.moveTo(x, 3 * GAP)
	ctx.lineTo(x, 13 * GAP)
	ctx.stroke()
}

function Drawline(x, y) {
	ctx.beginPath()
	ctx.moveTo(20, y)
	ctx.lineTo(x, y)
	ctx.stroke()

}

function DrawText(i, x, y) {
	af = GAP / 4
	try {
		text = LINEDATA[i].text + LINEDATA[i].octive
		if (showText) {
			ctx.fillText(text, x, y + quaterGap)
		}
	} catch (e) { }

}

function DrawGcleff(x, y, w, h) {
	const Gclef = document.createElement("img")
	Gclef.src = "/img/G.png"
	ctx.beginPath()
	try {
		ctx.drawImage(Gclef, x, y, w, h)

	} catch (i) { }
}

function DrawFcleff(x, y, w, h) {
	const Fclef = document.createElement("img")
	Fclef.src = "/img/F.png"
	ctx.beginPath()
	try {
		ctx.drawImage(Fclef, x, y, w, h)

	} catch (e) { }

}

function fet(F = "F") {
	const data = fetch(`/img/${F}.png`).then(resp => {

		if (resp.ok) {
			Canvas_class.Update()

			return resp.body
		}
	}).then(val => {
		return val

	})
	return data
}

function DrawNotes() {
	// console.log(NOTES.length)
	NOTES.forEach(element => {
		ctx.beginPath()
		const data = element.data
		x = (element.x + ANIMATIONSTEP )// * STEP
		y = element.y * GAP / 2
		if (x > 3) {
			x*=STEP
			if(element.hash!=undefined){
				if(element.hash.length!=0 ){
					ctx.beginPath()
					ctx.font = "20px sans-serif"
					
					ctx.fillText(element.hash, x+(diameter * 2),y+diameter)
				}
				ctx.font = "10px sans-serif"
				
			}
			if(element.dot!=undefined){
				if(element.dot.length!=0 ){
					ctx.beginPath()
					ctx.font = "30px sans-serif"
					
					ctx.fillText(element.dot, x+(diameter * 6),y)
				}
				ctx.font = "10px sans-serif"
				
			}
			circle(data,x, y,element)
			switch (element.type) {
				case 1:
					break
				case 1 / 2:
					stem(x, y, element)
					// circle(data,x, y, "black")
					break
				case 1 / 4:
					// circle(data,x, y, "black")
					stem(x, y, element), element
					break
				case 1 / 8:
					// circle(data,x, y, "black")
					flag(stem(x, y, element), element)
					break
				case 1 / 16:
					// circle(data,x, y, "black")
					flag2(stem(x, y, element), element)
					break
				case 1 / 32:
					// circle(data,x, y, "black")
					flag3(stem(x, y, element), element)
					break
			}
		}
	});
}

function circle(data,x, y, element) {
	ctx.beginPath()
	const pos = ((LINEDATA.length/2)- element.y)+(7 * 3)
	if(getkeys(pos).Line){
		ctx.beginPath()
		ctx.moveTo((x - diameter*5),y)
		ctx.lineTo((x + diameter*5),y)
		ctx.stroke()
	}
	// ctx.save()
	// ctx.translate(Canvas_class.Width/2, Canvas_class.Height/2);
	// ctx.translate(ctx.width/2, ctx.height/2);
	// ctx.scale(1,2)
	
	ctx.fillStyle = element.color
	if(element.type>1/4 && element.color=="black"){
		ctx.fillStyle = "white"

	}
	ctx.arc(x, y, GAP * 0.4, 0, 2 * Math.PI)
	ctx.fill()
	ctx.fillStyle = "#000000"
	ctx.stroke()
	// ctx.restore()
}

function stem(x, y, element) {
	ctx.beginPath();
	isupper = false
	let x2 = x + GAP * 0.4
	let y2 = y - GAP * 3.5
	if (element.y > 16) {
		x2 = x - GAP * 0.4
		y2 = y + GAP * 3;
		isupper = !false

	}
	ctx.moveTo(x2, y)
	ctx.lineTo(x2, y2)
	ctx.stroke()

	return { x: x2, y: y2, isupper: isupper }
}

function flag(cood = { x: -1, y: -1 }) {
	x = cood.x
	y = cood.y
	ctx.beginPath()
	ctx.moveTo(x, y)
	if (cood.isupper) {
		ctx.lineTo(x + (diameter * 4), y - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y + (diameter * 4))
	}
	ctx.stroke()

}

function flag2(cood = {}, data) {
	x = cood.x
	y = cood.y
	ctx.beginPath()
	ctx.moveTo(x, y)
	if (cood.isupper) {
		ctx.lineTo(x + (diameter * 4), y - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y + (diameter * 4))
	}
	ctx.stroke()
	ctx.beginPath()
	y2 = y + diameter * 2
	ctx.moveTo(x, y2)
	if (cood.isupper) {
		y2 = y - diameter * 2
		ctx.moveTo(x, y2)
		ctx.lineTo(x + (diameter * 4), y2 - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y2 + (diameter * 4))
	}
	ctx.stroke()

}

function flag3(cood = {}, data) {
	x = cood.x
	y = cood.y
	ctx.beginPath()
	ctx.moveTo(x, y)
	if (cood.isupper) {
		ctx.lineTo(x + (diameter * 4), y - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y + (diameter * 4))
	}
	ctx.stroke()
	ctx.beginPath()
	y2 = y + diameter * 2
	ctx.moveTo(x, y2)
	if (cood.isupper) {
		y2 = y - diameter * 2
		ctx.moveTo(x, y2)
		ctx.lineTo(x + (diameter * 4), y2 - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y2 + (diameter * 4))
	}
	ctx.stroke()
	ctx.beginPath()
	y2 = y + diameter * 4
	ctx.moveTo(x, y2)
	if (cood.isupper) {
		y2 = y - diameter * 4
		ctx.moveTo(x, y2)
		ctx.lineTo(x + (diameter * 4), y2 - ((diameter * 4)))

	} else {
		ctx.lineTo(x + (diameter * 4), y2 + (diameter * 4))
	}
	ctx.stroke()
}

function DrawTimeSignature() {

	ctx.beginPath()	
	x = STEP*3.25
	pos = 5
	y = pos*GAP
	ctx.font=`${3*GAP}px sans-serif`
	ctx.textAlign="center"
	ctx.fillStyle="grey"
	ctx.fillText(beats, x, y)
	y = (pos+2)*GAP
	ctx.fillText(beatsType, x, y)
	ctx.fillStyle="black"

	ctx.font=`${10}px sans-serif`

	ctx.textAlign="start"
	
	// timeseg()

}
function timeseg1(){
	var count=0
	NOTES.forEach(item=>{
		count+=item.type
		if(count==beats/beatsType){
			DrawVline(STEP * (item.x+1))
			count=0

		}

	})
}
function timeseg(){
	var count=0
	var max=0
	mins=[]
	NOTES.forEach(item=>{
		max=Math.max(min,item.type)
		mins.push(max)
	})
	mins.forEach(item=>{

	})
}
// const NOTES_=arrange()
function arrange(){
	const newA=[]
	for (var i = 0; i < NOTES.length; i++) {
		const note = NOTES[i]
		NOTES.forEach(item=>{
			if(item.x<note.x){
				NOTES[NOTES.indexOf(item)]=note
				NOTES[i]=item
			}
		})
	}
	return newA
}

function compare(i,val,val2="text"){
	o=NOTES[i][`${val}`]
	n=NOTES_[i][`${val}`]
	NOTES[i].color="red"
	if(typeof(o)=="object"){
		old=NOTES[i].data[val2]
		newd=NOTES_[i].data[val2]
		console.log(old,newd)
		return {old:old,newd:newd}
	}else{
		return {o,n}
	}
	Canvas_class.Update()
}
