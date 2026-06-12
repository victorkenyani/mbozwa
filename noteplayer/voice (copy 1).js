const actx = new AudioContext()
const voice={}
const voicegain={}
function pupulate_osc(id=12){
    keys = document.querySelectorAll(".keys")
    gain = new GainNode(actx)
    gain.gain.value=0
    keys.forEach(item=>{
        id = item.id
        const frequency = freq(Number(id))
        osc = new OscillatorNode(actx, {frequency: frequency})

    
        // gain.gain.setValueAtTime(0.5, actx.currentTime);
        // gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.5);
        // gain.gain.setValueAtTime(0, actx.currentTime+1);

        // osc = new OscillatorNode(actx)

        osc.start()
        voicegain[id]=gain

        voice[id]=osc

        osc.connect(gain)
        gain.connect(actx.destination)

    })
    return voice
}

function playa(id,color="red") {
    // document.getElementById(id).style.backgroundColor = color
    gain = new GainNode(actx)
    const frequency = freq(Number(id))
    osc = new OscillatorNode(actx, {frequency: frequency})
    voice[id]=osc
    // osc=voice[id]
    osc.start()
    
    // try{
    // }catch(e){
    //     // actx.resume()
    // }

    // gain = voicegain[id]

    gain.gain.value=1
    
    gain.gain.setValueAtTime(0.5, actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.5);
    gain.gain.setValueAtTime(0, actx.currentTime+1);

    voicegain[id]=gain
    
    osc.connect(gain)
    gain.connect(actx.destination)

    
}
// pupulate_osc()
function stopa(id, dura=1, st=false) {
    // actx.suspend()
    if(st){
        gain = voicegain[id]
        gain.gain.setValueAtTime(0, actx.currentTime+1);
        
        voice[id].stop()
        voice[id].disconnect()
        delete voice[id]
        delete voicegain[id]
    }
    document.getElementById(id).style.backgroundColor=""


}

function freq(id) {
    
    return (4400/32)*(2**((Number(id)-9)/12))
}

//playa(50)