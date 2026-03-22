const audioCtx= new AudioContext()
var Mosc = null
let Mvol = 0.1
let MASTER=null
let Moscs = {}
const shape=['sine', 'square', 'sawtooth', 'triangle']

function initosc() {
	Mosc = audioCtx.createOscillator()
	const type=0
	Mosc.type=shape[type]
	Mgain()
	Mosc.start()
	Keys.forEach(item=>{
		const osc = audioCtx.createOscillator()
		osc.start()
		Moscs[item.id] = osc
	})
	return Mosc
}

const MTone = (velocity, Mosc_) =>{
	const gain = audioCtx.createGain()
	if(Mosc_!=undefined){

		velocity/=500
		MASTER=gain
		gain.gain.value=velocity
		gain2=MTone_Gen(gain)
		Mosc_.connect(gain2)
		gain.connect(audioCtx.destination)
		
	}
	return gain
}

function MTone_Gen(gain){
	currentTime = audioCtx.currentTime
	let g=gain.gain
	let dist = 0.9
	g.setValueAtTime(g.value, currentTime)
	g.exponentialRampToValueAtTime(0.001, currentTime+dist)
	g.linearRampToValueAtTime(0.001, currentTime+dist)
	g.setValueAtTime(0, currentTime+1.5)
	return gain
}


const Mgain = (vol=0.5) =>{
	const gain = audioCtx.createGain()
	gain.gain.value=200
	gain.connect(MTone(0))
	return gain
}

function Mplay(pos,velocity=0.8){
	
	Mosc=Moscs[pos+'']
	Mosc.frequency.value=freq(pos)
	// Mosc.start()
	mtont=MTone(velocity, Mosc)
	audioCtx.resume()
	return Mosc

}


initosc()