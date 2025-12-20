console.log("piano")
let no_of_keys = 88/*(7*10)*/
let da =JSON.parse('{"name":"piano","data":[{"detuneNumber":880,"gain":0.5,"frequency":50,"Attack":1,"Release":500}]}') 
const defaultdata ={name:'flute', data:[{detuneNumber:880,gain:0.5,frequency:50,Attack:50,Release:50}]}
const key_notes = ["c", "d", "e", "f", "g", "a", "b", ]
const main = document.querySelector("main")
let s = document.createElement('style')
const mastervolume = context.createGain()
mastervolume.gain.value=Volume.value/10
main.append(s)
const holder = function(){
	const mholder = document.createElement("div")
	mholder.className="pianoholder"
	mholder.style.height="100%"
	// main.innerHTML=stl
	main.append(mholder)
	return mholder
}

function drawkeys(argument) {
	var width =50, c=0, id=0
	no_of_keys=52
	for (var i = 0; i < no_of_keys; i++) {
		const btn = document.createElement('button');
		btn.className="keys white"
		btn.id=id
		btn.textContent = key_notes[c]
		if (c>=key_notes.length-1) {
			c=-1
		}
		c++
		let s = btn.style
		s.left = `${i*width}px`
		s.width=`${width}px`
		if (btn.textContent.includes("e") || btn.textContent.includes("b")) {
			id-=1
		}
		id+=2

		holder().append(btn)
		btn.onpointerdown=function(){
			if (this.style.backgroundColor=='') {
				this.style.backgroundColor='yellow'
			playsound(this.id)
			}
		}
		btn.onpointerup=function(){
			if (this.style.backgroundColor=='yellow') {
				this.style.backgroundColor=''
			stopsound(this.id)
			}
		}
	}
	c=0
	id=1
	// no_of_keys=36
	for (var i = 0; i < no_of_keys; i++) {
		const btn = document.createElement('button');
		btn.className="keys black"
		btn.id=id
		btn.textContent = key_notes[c]+"#"
		if (c>=key_notes.length-1) {
			c=-1
		}
		c++
		let s = btn.style
		s.left = `${(i*width) + width/2}px`
		s.width=`${width}px`
		if (btn.textContent.includes("e") || btn.textContent.includes("b")) {
			id-=1
		}else{
			holder().append(btn)

		}
		id+=2
		btn.onpointerdown=function(){
			if (this.style.backgroundColor=='') {
				this.style.backgroundColor='yellow'
				playsound(this.id)
			}
			console.log(this.id, this.textContent, Math.round(Number(this.id)/12))
			
		}
		btn.onpointerup=function(){
			if (this.style.backgroundColor=='yellow') {
				this.style.backgroundColor=''
				stopsound(this.id)
			}
		}

	}
}

function freq(num){
	const a = 440
	return (a/32)*(2**((num-9)/12))
}


drawkeys()
oscillators=[]
let keys = document.querySelectorAll('.keys')
for (var i = 0; i < keys.length; i++) {			
	const source_ = new OscillatorNode(context)
	source_.frequency.value = freq(i)
	source_.start()
	oscillators.push(source_)
}
/*
	global play functions
*/


function playsound(id){
	PLAY(id)
}
function stopsound(id){
	console.log('stop', id)
}
Volume.oninput=function(){
	mastervolume.gain.value=this.value/10
  
}
function PLAY(fr) {

    let data = defaultdata
    Voicename.textContent=data.name
    data = da
    const Osc = [], gain = []
    var now = context.currentTime
    for (var i = 0; i < data.data.length; i++) {
        const data_ = data.data[i];
        Osc[i] = context.createOscillator()
        gain[i] = context.createGain()
        gain[i].gain.value = 1
        Osc[i].start()
        Osc[i].connect(gain[i]).connect(mastervolume).connect(context.destination)
    }
    for (var i = 0; i < data.data.length; i++) {
        const data_ = data.data[i];
        Osc[i].detune.value = data_.detuneNumber
        let FR=freq(fr)
        if(fr==undefined){
            FR=data_.frequency
        }
        Osc[i].frequency.setValueAtTime(FR, now)
        Osc[i].type = data_.type
        gain[i].gain.setValueAtTime(0.0, now)
        gain[i].gain.linearRampToValueAtTime(1,now + data_.Attack/100)
        gain[i].gain.linearRampToValueAtTime(0,now + data_.Attack/100 + data_.Release/(1000-Delay.value))
        gain[i].gain.setValueAtTime(0.0, now)

    }    
}


const Allkeys = document.querySelectorAll('.keys'), pianoholder =document.querySelector('.pianoholder')
// sreen_piano_holder.scrollLeft = 0
