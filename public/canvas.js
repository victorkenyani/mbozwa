class canvasclass{
	constructor(){
		this.canvas=canvas
		this.cxt = canvas.getContext('2d')
		this.beatBoxes=[]
		this.bars=[]
		this.duratuion= 0 
		this.speed = Speed.value/60
	}
	init(){
		this.canvas.height = document.querySelector('footer').offsetHeight
		this.canvas.width = keys[keys.length-1].offsetWidth + keys[keys.length-1].offsetLeft
		console.log(this.canvas)
		drawBoxes(1)
		
	}

	set height(h){
		this.height_=h
		this.canvas.height = h
	}
	get height(){
		return this.height_
	}

	drawBoxes(){
		this.bars=[]
		this.beatBoxes.forEach(box=>{
			this.cxt.clearRect(box.x,box.y,box.width,box.height)
			this.cxt.fillStyle=box.color
			if (box.selected) {
				this.bars.push(box)
			}
			this.cxt.fillRect(box.x,box.y,box.width,box.height)
		})
		this.drawBars()

	}
	drawBars(){
		this.bars.forEach(box=>{
			this.cxt.clearRect(box.x,box.y,box.width,box.height)
			this.cxt.fillStyle='green'
			this.cxt.fillRect(box.x,box.y,box.width,box.height)

		})
	}
	ANIMATE(){
		this.cxt.clearRect(0,0,canvas.width,canvas.height)
		this.bars.forEach(box=>{
			this.cxt.fillStyle='green'
			box.y-= this.speed
			this.cxt.fillRect(box.x,box.y,box.width,box.height)
			if (box.y<0 && box.y>= -this.speed) {
				let this_ = document.getElementById(box.id)
				if (this_.style.backgroundColor=='') {
					this_.style.backgroundColor='yellow'
					playsound(box.id)
				}
			}

			if (box.y + box.height<0 && box.y + box.height>= -this.speed) {
				let this_ = document.getElementById(box.id)
				if (this_.style.backgroundColor=='yellow') {
					this_.style.backgroundColor=''
					
				}
			}

		})
		this.duratuion+=this.speed
	}
	START(){
		if(checkif.isplaying){
			window.requestAnimationFrame(Canvas.START)
			Canvas.ANIMATE()
		}else{
			Canvas.STOP()
		}
	}
	STOP(){
		checkif.isplaying=false
		this.bars.forEach(box=>{
			box.y += this.duratuion
		})
		this.duratuion=0
		this.drawBoxes()
	}
}
const Canvas = new canvasclass()
Canvas.init()

function drawBoxes() {
	const h=20
	Canvas.beatBoxes=[]
	for (var i = 0; i < Beats.value; i++) {
		for(let box of keys){
			const data = {}
			// let box = keys[i]
			data.x = box.offsetLeft+10
			data.width= box.offsetWidth-30
			data.height=h-2
			data.y=i*h
			data.color='red'
			data.id = box.id
			data.selected=false
			Canvas.beatBoxes.push(data)
			canvas.height=data.height+data.y

		}
	}
	Canvas.drawBoxes()
}


main.onscroll = function(){
	console.log(this.scrollLeft)
	document.querySelector('footer').scrollLeft= this.scrollLeft
}
Beats.oninput = function(){
	drawBoxes()
}
play_.onclick=function(){
	playBars()
}
stop_.onclick=function(){
	stopBars()
}
function playBars(){
	checkif.isplaying=true 
	Canvas.START() 
}
function stopBars(){
	Canvas.STOP() 
}
Speed.oninput = function(){
	console.log(this.value)
	Canvas.speed=this.value/60
}