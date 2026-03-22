let pressedkey2 = {}
function keydown_(id, velocity=75){
    velocity/=100
    id=Number(id)
    try{
        document.getElementById(id).style.backgroundColor="yellow"

    }catch(e){
        id=Number(id)+36
        document.getElementById(id).style.backgroundColor="yellow"


    }
    // play(id, velocity/100)
    // const pk=Mplay(id, velocity)
    const playedkey = sound3Play(id, velocity)
    pressedkey2[id+""] = playedkey

    /*
        when recording
    */
    if (canvasClass.isRecording) {

        canvasClass.drawRect(id, velocity)
    }
}

function keyup_(id){
    id=Number(id)
    soundStop(id)
    try{
        document.getElementById(id).style.backgroundColor=""

    }catch(e){
        id=Number(id)+36
        document.getElementById(id).style.backgroundColor=""
        

    }
    // document.getElementById(id).style.backgroundColor=""
    const pk =pressedkey2[id+""]
    // pk.gain.linearRampToValueAtTime(0, audioCtx.currentTime+.5)

    // pk.gain.value=0


    // pk.stop()
    // delete pressedkey2[id+""]
    // stop_(id)
}

function getfreq(fr){
    const ref = 440
    let result = ref+Math.pow(Math.pow(2,(1/2)),fr)
    return +(result).toFixed()
}

Body_.scrollLeft=Body_.scrollLeftMax/2
Body_.onscroll=(e)=>{
    
    footer.scrollLeft=Body_.scrollLeft
}