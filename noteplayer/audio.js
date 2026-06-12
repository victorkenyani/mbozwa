let audioContext = new AudioContext()
let samplePaths = []
let voice, loadedvoice=[],Voice_=[]



// samplePaths.push('../Audio/empty.wav')
// samplePaths.push('../Audio/PIANO.wav')
samplePaths.push('../Audio/E_PIANO.wav')
samplePaths.push('../Audio/STRING.wav')
samplePaths.push('../Audio/SOFT_PIANO.wav')
samplePaths.push('../Audio/VIOLINE.wav')
samplePaths.push('../Audio/WAH.wav')
samplePaths.push('../Audio/ORGAN.wav')
samplePaths.push('../Audio/mrt2.wav')
samplePaths.push('../Audio/mrt1.wav')
samplePaths.push('../Audio/open-hithat.wav')
samplePaths.push('../Audio/kick.wav')
samplePaths.push('../Audio/clap.wav')

async function getFile(filepath) {
	const response = await fetch(filepath);
	const arrayBuffer = await response.arrayBuffer();
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
	return audioBuffer;
}
async function setupsample(paths){
	const audioBuffers = []
	var i=0
	for(const path of paths){
		const sample = await getFile(path)
		audioBuffers.push(sample)
		var loads=audioBuffers.length/samplePaths.length*100

		i++
	}
	
	return audioBuffers
}
function playSample(audioBuffer,  pos, vol) {
	const source = audioContext.createBufferSource();
	source.buffer= audioBuffer
	let fr = freq(pos)
	source.playbackRate.value = fr
	let mgain = source.context.createGain()
	mgain.gain.value=vol
	source.connect(mgain)	
	mgain.connect(audioContext.destination)
	source.start()
	return source
}

function loadNotes() {
	setupsample(samplePaths).then((response)=>{
		const samples = response
		console.log("LOADING COMPLETEd")
		voice=samples[2]
		// voice=samples[1]
		Voice_=samples
		asamples=samples
		for (var i = 0; i < samplePaths.length; i++) {
			const pathname = samplePaths[i].replace('../Audio/','').replace('.wav','')
			loadedvoice[pathname]=samples[i]
		}
		// Mbozwa_Lib.NOTES_DATAS = [{"hash":"","text":"C","x":80,"y2":14,"y":140,"id":14,"data":{"octive":2,"index":0,"id":24,"text":"C"},"type":2},{"hash":"","text":"F","x":80,"y2":11,"y":110,"id":17,"data":{"octive":2,"index":3,"id":29,"text":"F"},"type":2},{"hash":"","text":"C","x":120,"y2":14,"y":140,"id":14,"data":{"octive":2,"index":0,"id":24,"text":"C"},"type":2},{"hash":"","text":"B","x":120,"y2":27,"y":256,"id":13,"data":{"octive":1,"index":6,"id":23,"text":"B"},"type":2},{"hash":"","text":"G","x":120,"y2":25,"y":276,"id":11,"data":{"octive":1,"index":4,"id":19,"text":"G"},"type":2},{"hash":"","text":"G","x":120,"y2":10,"y":100,"id":18,"data":{"octive":2,"index":4,"id":31,"text":"G"},"type":2},{"hash":"","text":"F","x":160,"y2":11,"y":110,"id":17,"data":{"octive":2,"index":3,"id":29,"text":"F"},"type":3},{"hash":"","text":"A","x":160,"y2":9,"y":90,"id":19,"data":{"octive":2,"index":5,"id":33,"text":"A"},"type":3},{"hash":"","text":"A","x":80,"y2":26,"y":266,"id":12,"data":{"octive":1,"index":5,"id":21,"text":"A"},"type":2},{"hash":"","text":"F","x":80,"y2":24,"y":286,"id":10,"data":{"octive":1,"index":3,"id":17,"text":"F"},"type":2}]
		loadData()
	SCREEN.REFRESH()
	});
	

}

function freq(num){
	num = Number(num)+(12)
	return (4.40/32)*(2**((num-9)/12))

}

function AUDIOPLAY(pos){

	playSample(voice,  pos, 1) 
}

loadNotes()
