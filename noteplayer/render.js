function Draw(w, h) {
	width=w;
	height=h
	if(y_!=0){
		DrawFcleff(x - SPACE*.5,y3_-GAP*3.5, SPACE*3, GAP*14)
		DrawGcleff(x - SPACE*.5,y_-GAP*2, SPACE*3, GAP*13)
	}
	DrawNote()
	DrawNotes()
	DrawSelectedNotes()
	DrawSTAFF(w, h)
	DrawINDICATOR()
}



function DrawSTAFF(w,h) {
	for (var i = 0; i < LINEDATA.length; i++) {
		data = LINEDATA[i]
		x = data.x * SPACE
		y = data.y * GAP
		W = w 

		text = data.text

		if(data.Line){
			dt=text+data.octive
			lw =  x+10*0
			mv = STAFFPOS
			if(mv%2==1){
				if(dt=="F4"){
					y_=y
				}else if(dt =="E3" ){
					y2_ = y
				}
				if(dt =="A2" ){
					y3_ = y
				}if(dt =="G1" ){
					y4_ = y
				}
				if((data.octive==mv && text!="C" && text!="E") || (data.octive==mv+1)     || (data.octive== mv+2 && text!="C") || (data.octive== mv+3 && text!="A") ){
					lw = w - SPACE
				}
			}
			// if(data.octive==mv || (data.octive == mv+1 && text=="C") || (data.octive == mv+1 && text=="E") || data.octive==mv+2 || (data.octive == mv+3 && text=="C") || (data.octive == mv+3 && text=="E") ){
			DrawHL(x, y, lw)
			// DrawTEXT(dt, x - (SPACE * 0.5), y)
		}else{
			// DrawTEXT(text + dat1a.hash, W - (SPACE * 0.5), y)
		}
		if(data.octive>0 && data.octive<5)
		DrawHASH(data.hash, y)
	}
	
	DrawVL(x,y_, y4_)
	DrawVL(x+5,y_, y2_)
	DrawVL(w - SPACE-5,y_, y2_)

	DrawVL(w - SPACE,y_, y4_)
	DrawVL(x+5,y3_, y4_)
	DrawVL(w - SPACE-5,y3_, y4_)

	DrawVL(PLAYERLINE * SPACE ,y_, y2_)
	DrawVL(PLAYERLINE * SPACE ,y3_, y4_)

	DrawVL((PLAYERLINE + 1) * SPACE ,y_, y2_)
	DrawVL((PLAYERLINE + 1) * SPACE ,y3_, y4_)
	DrawSTAFFVL()

}
function DrawSTAFFVL(){
	VLINES.forEach(item=>{
		DrawVL((item + ANIMATIONSTEP)*SPACE,y_, y2_)

		DrawVL((item + ANIMATIONSTEP)*SPACE,y3_, y4_)
	})

}
// let Fclef="",Gclef

function DrawGcleff(x,y,w,h){
	const Gclef = document.createElement("img")
	Gclef.src="/Images/G.png"
	ctx.beginPath()
	try{
		ctx.drawImage(Gclef,x,y,w,h)

	}catch(i){}
}

function DrawFcleff(x,y,w,h){
	const Fclef = document.createElement("img")
	Fclef.src="/Images/F.png"
	ctx.beginPath()
	try{
		ctx.drawImage(Fclef,x,y,w,h)
	

	}catch(e){}

}

function DrawHL(x, y, w){
	ctx.beginPath()
	ctx.moveTo(x,y)
	ctx.lineTo(w, y)
	ctx.stroke()
}
function DrawTEXT(text, x, y){
	ctx.beginPath()
	ctx.fillText(text, x, y)
}

function DrawVL(x,y,height){
	ctx.beginPath()
	ctx.moveTo(x,y)
	ctx.lineTo(x, height)
	ctx.stroke()
}
var width = 0, height=0, diameter = GAP*.75

function DrawNote(){
	x=MOUSEDATA.posx*SPACE+(SPACE*0.5)
	y=MOUSEDATA.posy*GAP
	ctx.beginPath()
	ctx.arc(x, y, diameter, 0, 2 * Math.PI)
	ctx.textAlign="center"
	ctx.fillText(MOUSEDATA.text, x, y+diameter/2)
	ctx.stroke()
}

function DrawNotes(){

	NOTES.forEach(item =>{
		
		x=(item.posx + ANIMATIONSTEP)*SPACE+(SPACE*0.5)
		// y=item.posy*GAP
		y=LINEDATA[LINEDATA.length-item.posy].y*GAP
		if (item.NOTE) {
			DrawCircleNotes(item, x, y)

		} else {
			DrawWAITNotes(item, x, y)

		}
	})
}

function DrawSelectedNotes(){

	SELECTEDNOTES.forEach(item =>{
		
		x=(item.posx + ANIMATIONSTEP)*SPACE+(SPACE*0.5)
		// y=item.posy*GAP
		y=LINEDATA[LINEDATA.length-item.posy].y*GAP
		// if (x > PLAYERLINE*3) {
			DrawCircleNotes(item, x, y, "red")

		// } else {

		// }
	})
}
function DrawCircleNotes(cdata, x, y, color){
	// x=x+ANIMATIONSTEP
	if(cdata.posx+ANIMATIONSTEP>PLAYERLINE-1){
		ctx.beginPath()
			ctx.fillStyle="color"
		ctx.arc(x,y, diameter, 0, 2 * Math.PI)
		ctx.lineWidth=2
		ctx.fillText(`${cdata.dot} ${cdata.hash}`,x+(diameter * 2.25),y)
		if(color!=undefined){
			ctx.fillStyle="red"
			ctx.fill()
		}
		switch(cdata.type){
		case 1/2:
			DrawSTEM(x+diameter,y,0,cdata)
			if(color!=undefined){
				ctx.fillStyle="red"
				ctx.fill()
			}
			ctx.fillStyle="black"
			break
		case 1/4:
			DrawSTEM(x+diameter,y,0,cdata)

			ctx.fill()
			break
		case 1/8:
			DrawSTEM(x+diameter,y,1,cdata)
			ctx.fill()

			break
		case 1/16:
			DrawSTEM(x+diameter,y,2,cdata)
			ctx.fill()

			break
		}
		ctx.stroke()
		ctx.beginPath()
		if (cdata.posy<11 || cdata.posy>31 || cdata.posy==21) {
			if(cdata.line){
				ctx.moveTo(x-(diameter*2),y/*+(diameter * 0.25)*/)
				ctx.lineTo(x+(diameter*2),y/*+(diameter * 0.25)*/)
				ctx.stroke()
			}
		}
	}
	ctx.fillStyle="#000000"

	ctx.lineWidth=1

}
function DrawWAITNotes(cdata, x, y, color){
	// x=x+ANIMATIONSTEP
	y= ( 14 )* GAP
	x-=diameter/2
	if(cdata.posx+ANIMATIONSTEP>PLAYERLINE-1){
		ctx.beginPath()
			ctx.fillStyle="color"
		ctx.arc(x,y, diameter, 0, 2 * Math.PI)
		ctx.lineWidth=2
		ctx.fillText(`${cdata.dot} ${cdata.hash}`,x+(diameter * 2.25),y)
		if(color!=undefined){
			ctx.fillStyle="red"
			ctx.fill()
		}
		switch(cdata.type){
		case 1:
			ctx.fillRect(x,y-GAP, diameter*2, diameter)

			break
		case 1/2:
			ctx.fillRect(x,y, diameter*2, diameter)
			
			break
		case 1/4:
			ctx.beginPath()
			var ii = 0
			for (var i = 0; i < GAP*4; i++) {
				ctx.moveTo(x,y+i)
				ii++
				if(i % GAP == 0){
					ii /=-1
				}

				ctx.lineTo(x+ii, y+i)
				ctx.stroke()
			}
			// ctx.fillRect(x,y, diameter*2, diameter)
			
			break
		case 1/8:
			ctx.beginPath()
			ctx.moveTo(x+(diameter),y-(GAP*2))
	
			ctx.lineTo(x, y+(GAP*2))
			ctx.stroke()
			ctx.beginPath()
			ctx.arc(x,y-(GAP*2), diameter, 0, Math.PI)
			ctx.stroke()

			break
		case 1/16:
			
			ctx.beginPath()
			ctx.moveTo(x+(diameter),y-(GAP*2))
	
			ctx.lineTo(x, y+(GAP*2))
			ctx.stroke()
			ctx.beginPath()
			ctx.arc(x,y-(GAP*2), diameter, 0, Math.PI)
			ctx.stroke()
			ctx.beginPath()

			ctx.arc(x-3,y-(GAP), diameter, 0, Math.PI)
			ctx.stroke()

			break
		}
		
	}
	ctx.fillStyle="#000000"

	ctx.lineWidth=1

}
function DrawSTEM(x,y,s=0,data){
	let y3=0
	let flx=0
	con = 0
	x2=x
	xd=(diameter *3)
	if(y<canvas.height/2){
		y2 = y-(GAP * 6)
		y3 = y-(GAP * 4)
		flx = x+(diameter *2)
		x2=x
	}else{
		y2 = y+(GAP * 6)
		y3 = y+(GAP * 4)
		flx = x/*-(diameter *2)*/
		con=0-diameter*2
		x2=x-(diameter *2)
		xd=0-xd
	}
	ctx.moveTo(x+con,y)
	ctx.lineTo(x+con, y2)
	if(s==1){
		ctx.moveTo(x2,y2)
		ctx.lineTo(flx,y3)
		if(data.double){
			if (y>=canvas.height/2) {
				ctx.moveTo(x,y)
				ctx.lineTo(x, y2-(GAP*12))
			}
			if (y<=canvas.height/2) {
				ctx.moveTo(x - (diameter*2) ,y)
				ctx.lineTo(x - (diameter*2), y2+(GAP*12))
			}
		}
	}else if(s==2){
		ctx.moveTo(x2,y2)
		ctx.lineTo(flx,y3)

		ctx.moveTo(x2,y2+GAP+(con * 1.5))
		ctx.lineTo(flx,y3+GAP+(con * 1.5))
		if(data.double){
			if (y>=canvas.height/2) {
				ctx.moveTo(x,y)
				ctx.lineTo(x, y2-(GAP*12))
			}
			if (y<=canvas.height/2) {
				ctx.moveTo(x - (diameter*2) ,y)
				ctx.lineTo(x - (diameter*2), y2+(GAP*12))
			}
		}

	}

}
function DrawHASH(hash,y){
	
	l=(SPACE*3.5)
	ctx.beginPath()
	ctx.textAlign="center"
	ctx.font=`${GAP*2.0}px sans-serif`
	ctx.fillText(hash, l/*3*SPACE*/, y+(GAP*0.5))
	ctx.fill()
	ctx.font="10px sans-serif"

}

function DrawINDICATOR() {
	const Things=["note", "type"]
	const y=5, f=10
	const cmds = [KEYBOARD.Shift, TYPE]

	for (var i = 0; i < Things.length; i++) {
		name =Things[i]
		const cmd = cmds[i]
		ctx.beginPath()
		const xi=i*(GAP * f)+holder.scrollLeft
		ctx.rect(xi,y,(GAP*(f-1)),(GAP * (f/3)))
		ctx.textAlign='start'
		ctx.fillText(`${name} ${cmd}`, xi+(GAP/2),y+(GAP * f/5))
		ctx.stroke()
	}
}
