
class GRAPHICS{
	constructor(){
		this.canvas=canvas
		this.holder=holder
		this.isPLAYING=false

	}
	START(){
		this.WIDTH = this.holder.clientWidth
		this.HEIGHT = this.holder.clientHeight
		this.canvas.style.backgroundColor = "#ffffff"//settings.CANVAS_PAGE_COLOR.color
		// this.screensettings=""
		LASTNOTE=get_LASTNOTE()
		if(LASTNOTE*SPACE > this.holder.clientWidth-(SPACE*4)){
			this.WIDTH= LASTNOTE*SPACE+(SPACE*2)
		}
		LINEDATA=LineData(this.HEIGHT)
		
		this.REFRESH()
	}

	REFRESH(){
		if(this.isPLAYING){
			ctx.clearRect(0,0,this.holder.clientWidth, this.holder.clientHeight)
		}else{
			ctx.clearRect(0,0, this.WIDTH, this.HEIGHT)

		}
		Draw(this.WIDTH, this.HEIGHT)
	}

	get WIDTH(){
		return this.canvas.width

	}

	set WIDTH(arg){
		// const width = arg>this.holder.clientWidth? arg:this.holder.clientWidth
		this.canvas.width = arg
	}

	get HEIGHT(){
		// return this.canvas.height
		return 385.0
	}

	set HEIGHT(arg){
		// const height = arg>this.holder.clientHeight ? arg:this.holder.clientHeight 
		// this.canvas.height = arg-3
		this.canvas.height = 385
	}

	
}

const Graphics = new GRAPHICS()

Graphics.START()

window.onresize = function(arg) {
	Graphics.WIDTH=holder.clientWidth
	Graphics.HEIGHT=holder.clientHeight
	Graphics.START()
	// Graphics.REFRESH()
	
	
	
}







