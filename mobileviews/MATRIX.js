let NOTES2 = []

let myGroup=sort_()

var ynotescount=(32*2)+1

// function convert_(y=16, x=5, type=(1/4)){
function convert_(y=16, x=5, type=(1/4),hash='',color='black',dot=''){
	const Notsdata={}
	Notsdata.x=x
	Notsdata.y=y
	let pos = (ynotescount - Notsdata.y )
	const dta=getkeys( pos)
	Notsdata.type=type
	Notsdata.hash=hash
	Notsdata.color=color
	Notsdata.dot=dot
	Notsdata.text= dta.text
	Notsdata.id=dta.id
	NOTES2.push(Notsdata)
	// console.log(pos, Notsdata.y, Notsdata.text, NOTES2.length)
	return Notsdata

}
function DrawMATRIX(w, h){
	NOTES2.forEach(item=>{
		Draw_NOTES(item)	
	})

}

function Draw_NOTES(item){
	let x = item.x
	let y = item.y
	let type = item.type
	let hash = item.hash
	let color = item.color
	let dot = item.dot
	let text = item.text
	let id = item.id
	ctx.beginPath()
	fontsize = 12
	x = x * STEP
	y = y * GAP / 2
	ctx.arc(x, y, GAP * 0.4, 0, 2 * Math.PI)
	ctx.fillStyle = "#808080"
	ctx.font = `${fontsize}px sans-serif`
	ctx.textAlign = 'center'
	ctx.fillText(text, x, y + fontsize / 2)
	ctx.font = "10px sans-serif"
	
	if(type>=0.5){
		color="#ffffff"
	}else{
		color="#000000"
	}
	ctx.fillStyle =color
	ctx.fill()
	ctx.stroke()
	Draw_STEM(x,y)
	Draw_TEXT(x,y,item)

	ctx.fillStyle ="#000000"
}
function Draw_TEXT(x,y,item){
	console.log
	if(item.hash!=undefined){
		if(item.hash.length!=0 ){
			ctx.beginPath()
			ctx.font = "20px sans-serif"
			
			ctx.fillText(item.hash, x-(STEP*0.5),y+diameter)
		}
		ctx.font = "10px sans-serif"
		
	}
	if(item.dot!=undefined){
		if(item.dot.length!=0 ){
			ctx.beginPath()
			ctx.font = "20px sans-serif"
			ctx.fillStyle ="red"
			item.dot="*"
			ctx.fillText(item.dot, x+(STEP*0.5),y)
		}
		ctx.font = "10px sans-serif"
		
	}
	ctx.fillStyle ="#000000"
}
function Draw_STEM2(x, y, isg) {

	let x2= x + GAP * 0.4
	let y2 = y - GAP * 3.5
	ctx.moveTo(x2, y)
	ctx.lineTo(x2, y2)
	ctx.stroke()

	return { x: x2, y: y2}
}

function Draw_STEM(x, y) {

	for (const key in myGroup) {
        if (!Object.hasOwn(myGroup, key)) continue;
        
        let element = myGroup[key];
        for (var i = 0; i < element.length; i++) {
        	item = element[i]
        	x = item.x * STEP
			y = item.y * GAP / 2
        	if(i>0){
        		Draw_STEM2(x, y,true)

        	}else{
        		Draw_STEM2(x, y, false)
        	}

        }
        element.forEach(item=>{

        })
        // console.log(element)
        
        
    }
}


// convert_()
function Startconverter(){
	NOTES2C=NOTES
	NOTES2=[]
	NOTES2C.forEach(item=>{
		let x = item.x
		let y = item.y
		let type = item.type
		let hash = item.hash
		let color = item.color
		let dot = item.dot
		let text = item.text
		let id = item.id
		// convert_(y, x, type)
		convert_(y, x, type, hash,color, dot)
		// convert_(x,y,type,hash,color,dot)
	})
	sort_()
}

function invert(){
	isMATRIRX = !isMATRIRX

	Startconverter()
	Canvas_class.Update()

}

function group(){
	newA=[]
	mx= get_LASTNOTE(NOTES2)
	for (var i = 5; i < mx; i++) {
		NOTES2.forEach(item=>{
			if (item.x=i) {

			}
		})
		
	}
}

function sort_(ind=0){
	const Group={}
	xlist=NOTES2.map(pross)
	function pross(e,i,a){
		
		return e.x
	}
	
	xlist.sort((a,b)=> a-b )
	
	console.log(xlist)
	for (var i = 0; i < xlist.length; i++) {
		xlist.forEach(item=>{
			if(xlist[i]==item){
				xlist.splice(i,1)
			}
		})
	}
	let newA=[]
	g=0
	for (var i = 0; i < xlist.length; i++) {
		newA=[]
		NOTES2.forEach(item=>{
			if(xlist[i]==item.x){
				
				newA.push(item)
				myGroup[item.x]=newA
			}
		})
	}
	console.log(1,xlist)

	return Group
}

