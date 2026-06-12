const GAP = 9
const SPACE = 30*2
let LINEDATA=[]
let VLINES=[]
let STAFFPOS=1
let DELAY=2
let TYPE=1/4
const canvas=document.getElementById('canvas')
const holder=document.getElementById("main")
const ctx = canvas.getContext('2d')
let NOTES=[]
let SELECTEDNOTES=[]
let octive_=0
// NOTES = [{"posy":11,"posx":4,"type":0.25,"hash":"#","double":false,"dot":"*","line":true},{"posy":13,"posx":4,"type":0.25,"hash":"","double":false,"dot":"*","line":true},{"posy":13,"posx":6,"type":0.25,"hash":"","double":false,"dot":"*","line":true},{"posy":15,"posx":5,"type":0.25,"hash":"","double":false,"dot":"*","line":true}]

// NOTES = [{"posx":4,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":4,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":6,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":6,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":9,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":10,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":12,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":12,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":15,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":15,"posy":26,"hash":"","type":0.5,"dot":""},{"posx":16,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":16,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":18,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":18,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":11,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":14,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":4,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":4,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":20,"hash":"b","type":0.125,"dot":""},{"posx":6,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":6,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":8,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":9,"posy":19,"hash":"","type":0.5,"dot":""},{"posx":9,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":10,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":10,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":12,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":12,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":15,"posy":21,"hash":"","type":0.5,"dot":""},{"posx":15,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":16,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":16,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":18,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":18,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":19,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":20,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":19,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":20,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":19,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":20,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":19,"posy":29,"hash":"","type":0.25,"dot":""},{"posx":20,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":22,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":25,"posy":25,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":23,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":21,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":26,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":26,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":20,"hash":"b","type":0.125,"dot":""},{"posx":26,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":26,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":25,"hash":"","type":0.125,"dot":""},{"posx":28,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":30,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":31,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":31,"posy":19,"hash":"","type":0.5,"dot":""},{"posx":31,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":32,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":32,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":32,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":34,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":33,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":35,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":29,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":38,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":26,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":21,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":39,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":41,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":42,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":43,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":42,"posy":29,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":42,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":42,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":44,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":45,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":47,"posy":21,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":24,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":19,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":17,"hash":"","type":0.5,"dot":"*"},{"posx":48,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":51,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":51,"posy":26,"hash":"","type":0.5,"dot":""},{"posx":52,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":52,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":26,"hash":"","type":0.125,"dot":""},{"posx":51,"posy":21,"hash":"","type":0.5,"dot":""},{"posx":51,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":52,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":52,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":16,"hash":"","type":0.125,"dot":""},{"posx":47,"posy":10,"hash":"","type":0.5,"dot":"*"},{"posx":57,"posy":22,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":18,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":25,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":27,"hash":"b","type":0.5,"dot":""},{"posx":54,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":29,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":58,"posy":27,"hash":"b","type":0.125,"dot":""},{"posx":58,"posy":25,"hash":"","type":0.125,"dot":""},{"posx":59,"posy":27,"hash":"b","type":0.125,"dot":""},{"posx":59,"posy":25,"hash":"","type":0.125,"dot":""},{"posx":60,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":27,"hash":"b","type":0.25,"dot":""},{"posx":61,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":23,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":28,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":25,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":24,"hash":"","type":0.125,"dot":""},{"posx":67,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":67,"posy":26,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":24,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":25,"hash":"","type":0.25,"dot":""},{"posx":70,"posy":24,"hash":"","type":0.5,"dot":""},{"posx":70,"posy":21,"hash":"","type":0.5,"dot":""},{"posx":58,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":59,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":58,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":59,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":21,"hash":"","type":0.125,"dot":""},{"posx":67,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":67,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":70,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":68,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":20,"hash":"b","type":0.25,"dot":""}]


let LASTNOTE=0

let DOT=""
let STEP = SPACE
var ANIMATIONSTEP=0
const KEYBOARD={
	Control:false,
	Shift:true,

}
let y_ = 0, y2_ = 0, y3 =0, y4_ = 0, x = 0, PLAYERLINE = 3

const MOUSEDATA ={
	x:0,
	y:0
}
function getkeys(i){
	const a = ["C", "D", "E", "F", "G", "A", "B"]
	const l = a.length
	const oct = Math.floor(i/l);
	let index = i
	let id = 0
	if (oct>0) {
		index = i -(l*oct)
	}
	id = index*2
	if (index>2) {
		id -= 1
	}
	id += 12 *oct
	text = `${a[index]}`
	isLine = i % 2 ==1
	return {hash:"",double:false ,octive:oct, index:index, id:id, text:text, pos:i, Line:isLine}
	
}
function LineData() {
	const arrays = []
	H= Math.floor(Graphics.HEIGHT/GAP)
	for (var i = 0; i < H; i++) {
		data = getkeys(i)
		data.x = 1
		data.hash=""
		data.y = H - i
		arrays.push(data)
	}
	return arrays
}


function get_LASTNOTE(){
  max=0
  NOTES.forEach(item=>{
   
      max = Math.max(max,item.posx)
    
  })
  return max
}


function reformart(mm=21-14){
  NOTES.forEach(Item=>{
    Item.posy+=mm
  })
}