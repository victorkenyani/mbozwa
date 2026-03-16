class CanvasClass {
	constructor(){
		this.canvas = document.getElementById('canvas')
		this.footer = document.getElementById('footer')
		this.lstk=document.getElementById("108");
		this.ctx=null
		this.isAlive = false
		this.isPlaying = false
		this.isRecording=false
		// this.bar=[]
		this.bar=[{"top":96,"height":16,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":47,"isRecording":false},{"top":126,"height":59,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":52,"isRecording":false},{"top":127,"height":55,"position":60,"left":643,"color":"#0f6","width":23,"velosity":36,"isRecording":false},{"top":203,"height":43,"position":72,"left":958,"color":"#0f6","width":23,"velosity":44,"isRecording":false},{"top":205,"height":42,"position":60,"left":643,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":207,"height":37,"position":67,"left":823,"color":"#0f6","width":23,"velosity":17,"isRecording":false},{"top":261,"height":6,"position":72,"left":958,"color":"#0f6","width":23,"velosity":38,"isRecording":false},{"top":288,"height":41,"position":57,"left":553,"color":"#0f6","width":23,"velosity":19,"isRecording":false},{"top":288,"height":50,"position":64,"left":733,"color":"#0f6","width":23,"velosity":13,"isRecording":false},{"top":290,"height":59,"position":69,"left":868,"color":"#0f6","width":23,"velosity":11,"isRecording":false},{"top":290,"height":63,"position":72,"left":958,"color":"#0f6","width":23,"velosity":42,"isRecording":false},{"top":347,"height":10,"position":59,"left":598,"color":"#0f6","width":23,"velosity":37,"isRecording":false},{"top":347,"height":17,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":45,"isRecording":false},{"top":374,"height":54,"position":60,"left":643,"color":"#0f6","width":23,"velosity":43,"isRecording":false},{"top":374,"height":11,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":49,"isRecording":false},{"top":376,"height":50,"position":67,"left":823,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":424,"height":15,"position":72,"left":958,"color":"#0f6","width":23,"velosity":51,"isRecording":false},{"top":448,"height":66,"position":67,"left":823,"color":"#0f6","width":23,"velosity":24,"isRecording":false},{"top":449,"height":38,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":45,"isRecording":false},{"top":450,"height":58,"position":60,"left":643,"color":"#0f6","width":23,"velosity":32,"isRecording":false},{"top":508,"height":24,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":51,"isRecording":false},{"top":534,"height":73,"position":62,"left":688,"color":"#0f6","width":23,"velosity":34,"isRecording":false},{"top":534,"height":74,"position":69,"left":868,"color":"#0f6","width":23,"velosity":20,"isRecording":false},{"top":535,"height":67,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":53,"isRecording":false},{"top":597,"height":17,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":52,"isRecording":false},{"top":634,"height":53,"position":55,"left":508,"color":"#0f6","width":23,"velosity":61,"isRecording":false},{"top":665,"height":81,"position":62,"left":688,"color":"#0f6","width":23,"velosity":28.000000000000004,"isRecording":false},{"top":692,"height":52,"position":67,"left":823,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":720,"height":32,"position":71,"left":913,"color":"#0f6","width":23,"velosity":49,"isRecording":false},{"top":721,"height":22,"position":55,"left":508,"color":"#0f6","width":23,"velosity":39,"isRecording":false},{"top":780,"height":23,"position":72,"left":958,"color":"#0f6","width":23,"velosity":49,"isRecording":false},{"top":781,"height":23,"position":60,"left":643,"color":"#0f6","width":23,"velosity":43,"isRecording":false},{"top":808,"height":38,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":56.99999999999999,"isRecording":false},{"top":808,"height":57,"position":67,"left":823,"color":"#0f6","width":23,"velosity":31,"isRecording":false},{"top":810,"height":47,"position":60,"left":643,"color":"#0f6","width":23,"velosity":51,"isRecording":false},{"top":863,"height":18,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":61,"isRecording":false},{"top":887,"height":61,"position":62,"left":688,"color":"#0f6","width":23,"velosity":30,"isRecording":false},{"top":889,"height":59,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":57.99999999999999,"isRecording":false},{"top":889,"height":60,"position":69,"left":868,"color":"#0f6","width":23,"velosity":21,"isRecording":false},{"top":947,"height":13,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":39,"isRecording":false},{"top":970,"height":76,"position":55,"left":508,"color":"#0f6","width":23,"velosity":17,"isRecording":false},{"top":973,"height":61,"position":71,"left":913,"color":"#0f6","width":23,"velosity":54,"isRecording":false},{"top":1003,"height":45,"position":62,"left":688,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":1033,"height":68,"position":67,"left":823,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1055,"height":48,"position":71,"left":913,"color":"#0f6","width":23,"velosity":46,"isRecording":false},{"top":1055,"height":83,"position":62,"left":688,"color":"#0f6","width":23,"velosity":21,"isRecording":false},{"top":1055,"height":83,"position":55,"left":508,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1121,"height":20,"position":71,"left":913,"color":"#0f6","width":23,"velosity":53,"isRecording":false},{"top":1122,"height":20,"position":67,"left":823,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1149,"height":78,"position":50,"left":373,"color":"#0f6","width":23,"velosity":36,"isRecording":false},{"top":1169,"height":33,"position":65,"left":778,"color":"#0f6","width":23,"velosity":20,"isRecording":false},{"top":1169,"height":40,"position":62,"left":688,"color":"#0f6","width":23,"velosity":22,"isRecording":false},{"top":1185,"height":25,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":1224,"height":8,"position":65,"left":778,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1225,"height":7,"position":69,"left":868,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":1225,"height":8,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":1226,"height":3,"position":62,"left":688,"color":"#0f6","width":23,"velosity":20,"isRecording":false},{"top":1243,"height":61,"position":52,"left":418,"color":"#0f6","width":23,"velosity":20,"isRecording":false},{"top":1244,"height":54,"position":67,"left":823,"color":"#0f6","width":23,"velosity":26,"isRecording":false},{"top":1245,"height":53,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1245,"height":62,"position":71,"left":913,"color":"#0f6","width":23,"velosity":45,"isRecording":false},{"top":1245,"height":55,"position":64,"left":733,"color":"#0f6","width":23,"velosity":27,"isRecording":false},{"top":1305,"height":18,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":54,"isRecording":false},{"top":1330,"height":35,"position":57,"left":553,"color":"#0f6","width":23,"velosity":26,"isRecording":false},{"top":1331,"height":36,"position":64,"left":733,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":1333,"height":34,"position":72,"left":958,"color":"#0f6","width":23,"velosity":61,"isRecording":false},{"top":1333,"height":34,"position":69,"left":868,"color":"#0f6","width":23,"velosity":43,"isRecording":false},{"top":1386,"height":11,"position":59,"left":598,"color":"#0f6","width":23,"velosity":17,"isRecording":false},{"top":1388,"height":13,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":45,"isRecording":false},{"top":1388,"height":8,"position":71,"left":913,"color":"#0f6","width":23,"velosity":43,"isRecording":false},{"top":1388,"height":7,"position":67,"left":823,"color":"#0f6","width":23,"velosity":22,"isRecording":false},{"top":1412,"height":37,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":27,"isRecording":false},{"top":1412,"height":50,"position":67,"left":823,"color":"#0f6","width":23,"velosity":21,"isRecording":false},{"top":1412,"height":51,"position":60,"left":643,"color":"#0f6","width":23,"velosity":24,"isRecording":false},{"top":1413,"height":31,"position":72,"left":958,"color":"#0f6","width":23,"velosity":22,"isRecording":false},{"top":1468,"height":16,"position":72,"left":958,"color":"#0f6","width":23,"velosity":49,"isRecording":false},{"top":1494,"height":37,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":39,"isRecording":false},{"top":1494,"height":50,"position":67,"left":823,"color":"#0f6","width":23,"velosity":15,"isRecording":false},{"top":1496,"height":49,"position":60,"left":643,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":1553,"height":19,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":44,"isRecording":false},{"top":1581,"height":44,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":31,"isRecording":false},{"top":1581,"height":43,"position":79,"left":1138,"color":"#0f6","width":23,"velosity":38,"isRecording":false},{"top":1582,"height":54,"position":52,"left":418,"color":"#0f6","width":23,"velosity":32,"isRecording":false},{"top":1583,"height":41,"position":72,"left":958,"color":"#0f6","width":23,"velosity":22,"isRecording":false},{"top":1637,"height":3,"position":79,"left":1138,"color":"#0f6","width":23,"velosity":42,"isRecording":false},{"top":1638,"height":4,"position":72,"left":958,"color":"#0f6","width":23,"velosity":41,"isRecording":false},{"top":1662,"height":43,"position":69,"left":868,"color":"#0f6","width":23,"velosity":24,"isRecording":false},{"top":1662,"height":82,"position":60,"left":643,"color":"#0f6","width":23,"velosity":17,"isRecording":false},{"top":1664,"height":70,"position":53,"left":463,"color":"#0f6","width":23,"velosity":19,"isRecording":false},{"top":1664,"height":43,"position":72,"left":958,"color":"#0f6","width":23,"velosity":27,"isRecording":false},{"top":1666,"height":41,"position":65,"left":778,"color":"#0f6","width":23,"velosity":11,"isRecording":false},{"top":1678,"height":29,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":1,"isRecording":false},{"top":1725,"height":24,"position":72,"left":958,"color":"#0f6","width":23,"velosity":18,"isRecording":false},{"top":1725,"height":22,"position":69,"left":868,"color":"#0f6","width":23,"velosity":25,"isRecording":false},{"top":1726,"height":22,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":54,"isRecording":false},{"top":1727,"height":10,"position":65,"left":778,"color":"#0f6","width":23,"velosity":34,"isRecording":false},{"top":1754,"height":59,"position":50,"left":373,"color":"#0f6","width":23,"velosity":21,"isRecording":false},{"top":1809,"height":9,"position":72,"left":958,"color":"#0f6","width":23,"velosity":25,"isRecording":false},{"top":1809,"height":9,"position":69,"left":868,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":1811,"height":6,"position":65,"left":778,"color":"#0f6","width":23,"velosity":31,"isRecording":false},{"top":1811,"height":8,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":44,"isRecording":false},{"top":1836,"height":59,"position":55,"left":508,"color":"#0f6","width":23,"velosity":41,"isRecording":false},{"top":1836,"height":48,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":44,"isRecording":false},{"top":1838,"height":42,"position":67,"left":823,"color":"#0f6","width":23,"velosity":28.000000000000004,"isRecording":false},{"top":1838,"height":33,"position":72,"left":958,"color":"#0f6","width":23,"velosity":31,"isRecording":false},{"top":1893,"height":11,"position":72,"left":958,"color":"#0f6","width":23,"velosity":53,"isRecording":false},{"top":1895,"height":17,"position":67,"left":823,"color":"#0f6","width":23,"velosity":27,"isRecording":false},{"top":1916,"height":60,"position":62,"left":688,"color":"#0f6","width":23,"velosity":22,"isRecording":false},{"top":1916,"height":57,"position":55,"left":508,"color":"#0f6","width":23,"velosity":40,"isRecording":false},{"top":1917,"height":43,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":54,"isRecording":false},{"top":1918,"height":3,"position":71,"left":913,"color":"#0f6","width":23,"velosity":28.000000000000004,"isRecording":false},{"top":1971,"height":18,"position":71,"left":913,"color":"#0f6","width":23,"velosity":49,"isRecording":false},{"top":1971,"height":8,"position":67,"left":823,"color":"#0f6","width":23,"velosity":41,"isRecording":false},{"top":1996,"height":47,"position":72,"left":958,"color":"#0f6","width":23,"velosity":56.99999999999999,"isRecording":false},{"top":1997,"height":72,"position":67,"left":823,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":1998,"height":50,"position":64,"left":733,"color":"#0f6","width":23,"velosity":31,"isRecording":false},{"top":1998,"height":69,"position":60,"left":643,"color":"#0f6","width":23,"velosity":19,"isRecording":false},{"top":2058,"height":13,"position":76,"left":1048,"color":"#0f6","width":23,"velosity":35,"isRecording":false},{"top":2083,"height":8,"position":67,"left":823,"color":"#0f6","width":23,"velosity":17,"isRecording":false},{"top":2084,"height":8,"position":60,"left":643,"color":"#0f6","width":23,"velosity":33,"isRecording":false},{"top":2085,"height":8,"position":79,"left":1138,"color":"#0f6","width":23,"velosity":35,"isRecording":false}]
		// this.bar=[{"top":99,"height":20,"position":68,"left":848,"color":"#0f0","width":14,"velosity":0.33},{"top":117,"height":31,"position":78,"left":1118,"color":"#0f0","width":14,"velosity":0.26},{"top":144,"height":24,"position":73,"left":983,"color":"#0f0","width":14,"velosity":0.47},{"top":165,"height":22,"position":71,"left":913,"color":"#0f6","width":23,"velosity":0.61},{"top":185,"height":24,"position":74,"left":1003,"color":"#0f6","width":23,"velosity":0.57},{"top":209,"height":28,"position":77,"left":1093,"color":"#0f6","width":23,"velosity":0.46},{"top":210,"height":5,"position":79,"left":1138,"color":"#0f6","width":23,"velosity":0.52}]
		this.speed = 1
		this.time_elapse = 0
	}
	init(){
		const t = this.lstk.offsetLeft+this.lstk.offsetWidth
		this.ctx = this.canvas.getContext("2d")
		this.Width=0

		this.Height=this.footer.offsetHeight
		this.start_PLAING()
		this.stop_Animated()

	}
	set Height(h){
		const fh = this.footer.offsetHeight
		this.canvas./*style.*/height=h//+"px"
		if (h>fh) {
			this.footer.style.overflow="scroll"
		}else{
			this.footer.style.overflow=""
		}		
	}
	get Height(){
		return this.canvas.offsetHeight
	}

	set Width(h){
		// const fh = this.footer.offsetWidth
		const t = this.lstk.offsetLeft+this.lstk.offsetWidth
		this.canvas.width=t
		this.footer.style.overflow="scroll"

			
	}
	get Width(){
		return this.canvas.width
	}

	drawRect(key_position=36, velosity=100){
		console.log(velosity)
		let color = ""
		if (canvasClass.key_(key_position).textContent.includes("#")) {
			color="#0f0"

		} else {
			color ="#0f6"
		}
		let data = {}
		const top =100;
		const height= 0 ;
		const left=this.key_(`${key_position}`).offsetLeft+10;
		const width=this.key_(`${key_position}`).offsetWidth-20;
		this.ctx.fillStyle=color
		this.ctx.fillRect(left,top,width,height)
		data.top=top;
		data.height=height;
		data.position=key_position;
		data.left=left;
		data.color=color;
		data.width=width;
		data.velosity=velosity*100
		data.isRecording=true
		this.bar.push(data)

	}

	key_(id){
		return document.getElementById(id);
	}
	refresh(){
		if (canvasClass.isAlive) {
			canvasClass.ctx.clearRect(0,0,canvasClass.Width,canvasClass.Height)
			if(canvasClass.bar.length!=0 && canvasClass.isRecording){
				canvasClass.Record(canvasClass.bar)
			}
			if(canvasClass.bar.length!=0 && canvasClass.isPlaying){
				canvasClass.PLAY(canvasClass.bar)
			}
			requestAnimationFrame(canvasClass.refresh)


		} else {
			

		}
	}
	Record(data){
		this.time_elapse+=this.speed
		for (var i = 0; i < data.length; i++) {
			const rect = data[i]
			rect.top-=this.speed
			if(rect.isRecording &&document.getElementById(rect.position).style.backgroundColor!=""){
				rect.height+=this.speed
			}else{
				rect.isRecording=false
			}
			this.ctx.fillStyle=rect.color
			this.ctx.fillRect(rect.left,rect.top,rect.width,rect.height)
		}
	}

	PLAY(data){
		this.time_elapse+=this.speed
		for (var i = 0; i < data.length; i++) {
			const rect = data[i]
			rect.top-=this.speed
			if(rect.top<0 && rect.top>0-(this.speed +1)){
				document.getElementById(rect.position).style.backgroundColor=rect.color
				Mplay(rect.position, rect.velosity) 
			}
			if(rect.top + rect.height<0 && rect.top + rect.height>0-(this.speed +1)){
				console.log("stop", rect.position)
				document.getElementById(rect.position).style.backgroundColor=""
				// stop_(rect.position) 
			}
			this.ctx.fillStyle=rect.color
			this.ctx.fillRect(rect.left,rect.top,rect.width,rect.height)
		}
	}


	stop_Animated(){
		const data = this.bar
		for (var i = 0; i < data.length; i++) {
			const rect = data[i]
			rect.top+=this.time_elapse
			
			this.ctx.fillStyle=rect.color
			this.ctx.fillRect(rect.left,rect.top,rect.width,rect.height)
		}
		this.speed = 1
		this.time_elapse = 0
		this.isAlive=false
		this.isRecording=false
		this.isPlaying=false
	}
	start_Recording(){
		this.isRecording=!false
		this.isPlaying=!true
		this.isAlive=true
		this.refresh()
		this.time_elapse=0
	}
	start_PLAING(){
		this.isRecording=false
		this.isPlaying=true
		this.isAlive=true
		this.refresh()
		this.time_elapse=0
	}
} 

const canvasClass = new CanvasClass()
canvasClass.init()
// canvasClass.drawRect(45)

function REC(argument) {
	STOP()
	canvasClass.start_Recording()
}
function STOP(argument) {
	canvasClass.stop_Animated()
}
function PLAY(argument) {
	STOP()
	canvasClass.start_PLAING()
}

function CLEAR(argument) {
	STOP()
	canvasClass.bar=[]
	canvasClass.init()
}