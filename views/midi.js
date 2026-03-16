if(navigator.requestMIDIAccess){
	 navigator.requestMIDIAccess().then(success, failure);
}
function success(midiAccess){
	//console.log(midiAccess)
	//midiAccess.onstatechange = updateDevices;
	// midiAccess.addEventListener('statechange', updateDevices)
	const inputs = midiAccess.inputs;
	// console.log(inputs)
	inputs.forEach((input) =>{
		//console.log(input)
		input.onmidimessage = handleInput;
	})
}

function updateDevices(event){
	console.log(event)
	// console.log(`Name: ${event.port.name} `)
}

function handleInput(input){
	// console.log(input)
	const command= input.data[0]
	if (command!=254) {

	const note= input.data[1]
	const velocity= input.data[2]
	if (velocity!=0) {
		keydown_(note, velocity)
	}else{
		keyup_(note)
	}
	// console.log(command, note, velocity)
	}

}

function failure(){
	console.log("doese not support midi ")
}