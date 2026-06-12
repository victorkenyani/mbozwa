var BPM = ((60/TEMPO.value) * 2000).toFixed()
id_TEMPO.textContent=`BPM : ${TEMPO.value}`
TEMPO.oninput = function(){
  BPM = ((60/this.value) * 2000).toFixed()
  id_TEMPO.textContent=`BPM : ${this.value}`
}
timelapse.oninput=function(){
  ANIMATIONSTEP=0-this.value
}
id_play.onclick = function () {
  actx.suspend()
  if (this.style.backgroundColor=="") {
    this.style.backgroundColor="green"
    if(LASTNOTE==0){
      LASTNOTE=get_LASTNOTE()
    }
    
    NEXT()
  } else {
    id_stop.click()
    // ANIMATIONSTEP=0
    // this.style.backgroundColor=""
  }
}
id_stop.onclick = function () {
  player.Stop()
  ANIMATIONSTEP=0
  timelapse.value=ANIMATIONSTEP
  document.querySelectorAll("button").forEach(item=>{
    item.style.backgroundColor=""
  })
  // actx.suspend()
  
  Graphics.REFRESH()

}
id_clear.onclick = function() {
  NOTES=[]
  SELECTEDNOTES=[]
  VLINES=[]
  Graphics.REFRESH()

}
document.querySelectorAll(".keys").forEach(item=>{
  item.onpointerdown=function() {
    KEYPRESSED(item.id)
  }
  item.onpointerup=function() {
    KEYRELEASED(item.id)
  }
})


function KEYPRESSED(id) {
  // console.log(id)
  document.getElementById(id).style.backgroundColor="red"
  playa(id, "red")
}
function KEYRELEASED(id) {
  stopa(id)
  document.getElementById(id).style.backgroundColor=""

}

function Player(callback, callback2) {
  timoutArrays={}
  this.timer = (duration, id)=>{
    this.timout = setTimeout(function() {
      callback()
    }, BPM * (duration * DELAY));
  }
  this.Stop = (id)=>{
    clearTimeout(this.timout)
  }
  this.play=(id,duration,RELEASE=3)=>{
    timoutArrays[id] = setTimeout(function() {
      callback2(id, duration)
    }, BPM * (duration * DELAY)/RELEASE);
  }
  this.stop_All=(id)=>{
    t=timoutArrays[id]
    clearTimeout(t)
    delete (timoutArrays[id])

  }
}


function expired(id, duration){
  KEYRELEASED(id, duration)

}

function NEXT() {
  ANIMATIONSTEP-=1 
  timelapse.value=Math.abs(ANIMATIONSTEP)
  min = 100
  duration = 0
  NOTES.forEach(item=>{
    if(item.posx+ANIMATIONSTEP==3){
      let type= item.type
      if(item.dot.length!=0){
        type+=item.type/4
      }
      min = Math.min(min,type)
      // data = getkeys(42-item.posy)
      data = LINEDATA[LINEDATA.length-item.posy] 
      let id = (data.id)
      if(item.hash=="#"){
       id+=1
      }else if(item.hash=="b"){
       id-=1
      }
      if(item.NOTE){
        KEYPRESSED(id);
        player.play(id, (type * 1),3)

     }
    }
  })
  if(min!=100){
    duration=min

  }else{
    duration=0.001
  }
  if(LASTNOTE+ANIMATIONSTEP>2){
    player.timer(duration)
  }else{
    id_stop.click()
    // id_play.click()
    // NEXT()
  }
  Graphics.START()
}

const player = new Player(NEXT,expired)
// const Player = new PLAYER(NEXT)

function keyup(id){
  document.getElementById(id).style.backgroundColor=""
}
