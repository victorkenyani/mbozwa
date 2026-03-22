

const soundMgain = audioCtx.createGain()
soundMgain.gain.value = Gain.value
soundMgain.connect(audioCtx.destination)
const shape=['sine', 'square', 'sawtooth', 'triangle']

const sound3DATA = function(){
	return JSON.parse(document.querySelectorAll(".Voices_option")[Voices.selectedIndex].value)
}


let MDATA=sound3DATA()
Release.value=MDATA.release
Attack.value=MDATA.attack

/*
create osc arrays
*/


let sound3oscs ={}
let sound3Mgain ={}

function sound3Tone(id, velocity){
	const soundgain = audioCtx.createGain()
	soundgain.gain.value=velocity
	currentTime = audioCtx.currentTime
	let g=soundgain.gain
	data = sound3DATA()
	let release = data.release
	let attack = data.attack
	g.setValueAtTime(velocity, currentTime)
	g.exponentialRampToValueAtTime(velocity*50, currentTime+(attack/100))
	g.linearRampToValueAtTime(velocity/10, currentTime+(release))
	g.setValueAtTime(0, currentTime+(release+.2))
	

	// sound3Mgain[id] = soundgain
	
	return soundgain
}

function sound3Tone2(id, velocity){
	const soundgain = audioCtx.createGain()
	soundgain.gain.value=velocity
	currentTime = audioCtx.currentTime
	let g=soundgain.gain

	let attack = Number(Attack.value)
	let release = Number(Release.value)
	console.log(attack,release)
	let dist = 1
	g.setValueAtTime(0, currentTime)
	g.linearRampToValueAtTime(velocity, currentTime+attack)
	g.linearRampToValueAtTime(0, currentTime+release+attack)//(dist/200))
	//(dist/200))
	// g.exponentialRampToValueAtTime(0.001, currentTime+dist/1)
	// g.linearRampToValueAtTime(0, currentTime+(dist/10))
	// g.setValueAtTime(0, currentTime+dist+(dist/1))

	sound3Mgain[id] = soundgain
	
	return soundgain
}

function sound3Tone3(id, velocity){
	const soundgain = audioCtx.createGain()
	soundgain.gain.value=velocity
	currentTime = audioCtx.currentTime
	let g=soundgain.gain

	let attack = Number(Attack.value)
	let release = Number(Release.value)
	console.log(attack,release)
	let dist = 1
	g.setValueAtTime(0, currentTime)
	g.linearRampToValueAtTime(velocity, currentTime+attack)
	g.exponentialRampToValueAtTime(0.01, currentTime+attack/10)
	g.linearRampToValueAtTime(0, currentTime+release+attack)//(dist/200))
	

	sound3Mgain[id] = soundgain

	sound3Mgain[id] = soundgain
	
	return soundgain
}



function soundStop(id){
	const gain2=sound3Mgain[id+""]
	if(gain2!=undefined){
		// gain2.gain.value=0.000000000000000000001
	}
}



function createArray() {
	Keys.forEach(key=>{
		let sound3osc=audioCtx.createOscillator()
		sound3osc.frequency.value = freq(key.id)
		sound3osc.start()
		sound3oscs[key.id]=sound3osc
	})
}




function sound3Play(id, velocity){
	MDATA=sound3DATA()

	let osc = sound3oscs[id+""]
	osc.type=MDATA.type
	oscTONE=sound3Tone3(id,velocity)

	osc.frequency.value = freq(id)


	osc.connect(oscTONE)
	oscTONE.connect(soundMgain)

	audioCtx.resume()

	return oscTONE
}

Gain.oninput=function(){
	soundMgain.gain.value=this.value
  
}
createArray()
