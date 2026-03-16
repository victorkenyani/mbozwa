const audiocontext = new AudioContext()
let pressedkey = {}

function play(pos, velocity) {
	const now = audiocontext.currentTime;
	let list = []
	osc=pressedkey[pos+'']=osc_(pos,0,now)
	const gainNode = gain(velocity)
	const gainNode2 = tone(velocity)
	// const gainNode = sound1(now)
	osc.connect(gainNode)
	// gainNode2.connect(gainNode)
	gainNode.connect(audiocontext.destination)

}

function stop_(pos) {
	const osc = pressedkey[pos+'']
	osc.stop()
	delete pressedkey[pos+'']


}

function osc_(pos, type=0, now){
	const osc = audiocontext.createOscillator()
	const shape=['sine', 'square', 'sawtooth', 'triangle']
	osc.type=shape[type]
	osc.frequency.value=freq(pos)
	osc.start(now) 
	// osc.stop(now+3)
	// setTimeout(()=>osc.stop(),500)
	return osc
}

function gain(velocity){
	const gainNode = audiocontext.createGain()
	gainNode.gain.value=velocity
	// gainNode.gain.setValueAtTime(1, audiocontext.currentTime);
	// gainNode.gain.exponentialRampToValueAtTime(0.1,audiocontext.currentTime+0.05)
	return gainNode
}

function freq(num){
	//num +=(12*2)
    const a = 440
    return (a/32)*(2**((num-9)/12))
}

function sound1(now){
	const gainNode = audiocontext.createGain();
	// const now = audiocontext.currentTime;
	gainNode.gain.setValueAtTime(0, now);
	gainNode.gain.linearRampToValueAtTime(1.0, now+1)
	gainNode.gain.setValueAtTime(1.0, now+2);
	gainNode.gain.linearRampToValueAtTime(1.0, now+3)
	return gainNode

	// gainNode.gain.exponentialRampToValueAtTime(0.1,audiocontext.currentTime+0.05)

}

function tone(velocity){
	const now = audiocontext.currentTime
	const gainNode = audiocontext.createGain()
	gainNode.gain.value=velocity

	gainNode.gain.setValueAtTime(1, now);
	gainNode.gain.linearRampToValueAtTime(0.8, now+1)
	gainNode.gain.setValueAtTime(0.80, now+2);
	gainNode.gain.linearRampToValueAtTime(0.8, now+3)

	gainNode.gain.setValueAtTime(0, audiocontext.currentTime);
	gainNode.gain.exponentialRampToValueAtTime(0.1,audiocontext.currentTime+0.05)
	return gainNode
}

function tone1(velocity){
	const now = audiocontext.currentTime
	const gainNode = audiocontext.createGain()
	gainNode.gain.value=velocity

	gainNode.gain.setValueAtTime(0.0, now);
	gainNode.gain.exponentialRampToValueAtTime(0.1,now+0.05)
	gainNode.gain.linearRampToValueAtTime(1, now+0.04)

	return gainNode
}
