const actx = new AudioContext()
const voice={}
const voicegain={}
let master = new GainNode(actx)
master.gain.value= Volume.value
id_vol.textContent=`VOL : ${Volume.value}`

function gaincahang(value){
    id_vol.textContent=`VOL : ${value}`
    master.gain.value=Number(value)

}
function pupulate_osc(id=12){
    keys = document.querySelectorAll(".keys")
    gain = new GainNode(actx)
    gain.gain.value=0
    keys.forEach(item=>{
        id = item.id
        const frequency = freq(Number(id))
        osc = new OscillatorNode(actx, {frequency: frequency})
        osc.frequency.setValueAtTime(frequency, actx.currentTime);
        osc.start()
        voice[id]=osc

    })
    return voice
}

function playa(id,color="red") {
    gain = new GainNode(actx)
    const frequency = freq(Number(id))
    osc=voice[id]
    gain.gain.value=1
    range=0.001
    gain.gain.setValueAtTime(range*10, actx.currentTime);
    gain.gain.linearRampToValueAtTime(range, actx.currentTime + 0.5+range)
    gain.gain.exponentialRampToValueAtTime(range, actx.currentTime + 0.5+range);
    gain.gain.setValueAtTime(0, actx.currentTime+0.6+range);

    voicegain[id]=gain
    
    osc.connect(gain)
    gain.connect(master)
    master.connect(actx.destination)

    actx.resume()
    // osc.start()
    
}
pupulate_osc()
function stopa(id, dura=1, st=false) {
    if(st){
    actx.suspend()
        gain = voicegain[id]
        gain.gain.setValueAtTime(0, actx.currentTime+0.6);
        gain.gain.value=0



        
        // voice[id].stop()
        // voice[id].disconnect()
        // delete voice[id]
        delete voicegain[id]
    }
}

// function freq(id) {
//     // id+=(12*5)
//     return (4400/32)*(2**((Number(id)-9)/12))
// }

//playa(50)