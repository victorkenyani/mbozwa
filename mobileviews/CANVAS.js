class Class_Canvas{
	constructor(Scrn,Canvas){
		this.Canvas = Canvas;
		this.Screen = Scrn;
	}
	Init_Canvas(){
		this.Width=this.Screen.clientWidth
		this.Height = this.Screen.clientHeight
		this.Canvas.style.backgroundColor="white"
		// GAP =  Math.floor(this.Height/(STAFFLINES*2))

		LINEDATA2 = Makedata(this.Width,this.Height)

		this.Update()
	}
	set Width(width){
		
		if (this.Canvas.width>width) {
			this.Canvas.width=this.Screen.clientWidth
		} else{
			this.Canvas.width=width
			this.Screen.style.overflow="scroll hidden"
		}


	}
	get Width(){
		return this.Canvas.width
	}
	set Height(height){
		this.Canvas.height = height

	}
	get Height(){
		return this.Canvas.height;
	}

	Update(){
		// ctx.clearRect(0,0,this.Screen.clientWidth, this.Screen.clientHeight)
		ctx.clearRect(0,0, this.Canvas.width, this.Canvas.height)
		Draw(this.Width, this.Height)

	}

}




const Canvas_class = new Class_Canvas(Screen ,Canvas )

Canvas_class.Init_Canvas()
fet("F")
fet("G")


window.onresize = function(e){
	Canvas_class.Init_Canvas()
	forceScreen()

}

