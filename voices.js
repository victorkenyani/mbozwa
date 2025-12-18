
function mbozwasettings(){
    return JSON.parse('[{"Name":"MBOZWASOUND1","data":[{"type":"sine","frequency":"100","Release":"50","Attack":"5"},{"type":"sine","frequency":"100","Release":"50","Attack":"5"}]}, {"Name":"test","data":[{"type":"sine","frequency":"50","Attack":"1","Release":"200"},{"type":"square","frequency":"50","Attack":"50","Release":"400"}]}]')
}


container.innerHTML=
`
<style>

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    container{
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px black solid;
        display: flex;
    }
    header{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 10%;
        background-color: aqua;
    }
    body{
        overflow: hidden;
    }
    main{
        position: absolute;
        left: 0;
        right: 0;
        background-color: tomato;
        top: 10%;
        bottom: 0;
        overflow: hidden;
    }
    #oscillators{
        position: absolute;
        display: block;
        /* width: 90%; */
        left: 1%;
        right: 1%;
        max-height: 50%;
        border: 1px black dotted;
        background-color: wheat;
        overflow: scroll;
    }
    #oscs{
        text-align: center;
        position: relative;
        display: block;
        width: 100%;
        background-color: antiquewhite;
        margin-top: 1px;
        border-radius: 10px;
        margin-bottom: 10px;
        box-shadow: 0px 8px 8px black;

    }
    #oscs input, select{
        width: 50%;
    }
    #NoOsc{
        position: relative;
        display: inline-block;
    }
    #detuner{
        display: block;
        position: relative;
        top: 50%;
    }
</style>
<header>
    <input type='range' min=0.1 max=4 value=1 step='any' id='Duration'><label id="Duration_Lebel">1</label>
    <input type='range' min=1 max=980 value=838 step='1' id='Delay'><label id="Delay_Lebel">1</label>
    <select onclick="voice_change(value, selectedIndex)" id='voice_select'></select>
</header>
<main>
    <div>
        <p>Name of voice</p>
        <input id="name_" type="text" required placeholder="name" value='' >
        <p>Number of oscillators</p>
        <input id="NoOsc" type="number" min="1" max="12" value="6" step="1" id="NoOsc">
    </div>
    <div><button onclick="PLAY()">test</button><button onclick="save()">save</button><button onclick="renamevalues()">create New</button></div>
    <div id="oscillators"></div>
    <div id=detuner>
        <select id='interval'>
          <option value=0 selected>Unison c</option>
          <option value=100>Minor second c#</option>
          <option value=200>Major second d</option>
          <option value=300>Minor third d#</option>
          <option value=400>Major third e</option>
          <option value=500>Perfect fourth f</option>
          <option value=600>Tritone f#</option>
          <option value=700>Perfect fifth g</option>
          <option value=800>Minor sixth g#</option>
          <option value=900>Major sixth a</option>
          <option value=1000>Minor seventh a#</option>
          <option value=1100>Major seventh b</option>
          <option value=1200>Octave c</option>
        </select><br>
<input id='detuneNumber' type='number' min=-1200 max=1200 step=100 value=0><br>
<input id='detuneSlider' type='range' min=-1200 max=1200 step=100 value=0>
    </div>
</main>
`

let dataArray = []
dataArray = mbozwasettings()

let context = new AudioContext()
NoOsc.oninput = function () {
    console.log(this.value)
    loadOscilators()
}
Duration.oninput = function(){
    Duration_Lebel.innerText=this.value
}
Delay.oninput = function(){
    Delay_Lebel.innerText=this.value
}


function loadOscilators() {
    oscillators.innerHTML = ''
    

    for (var i = 0; i < NoOsc.value; i++) {
        const _div= document.createElement('div')
        _div.id='oscs'
        let pos = document.createElement('p')
        pos.innerText = `OSC ${i+1}`
        const mselect = document.createElement('select')
        mselect.id ='type'
        mselect.className ="waves"
        mselect.innerHTML = `<option  value='sine'>Sine</option>
                <option value='square'>Square</option>
                <option value='sawtooth'>Sawtooth</option>
                <option value='triangle'>Triangle</option>`
        const posfr = document.createElement('p')
        posfr.innerText='Frequency(Hz)';
        const frequecy = document.createElement('input')
        frequecy.className="frequencies"
        frequecy.id = 'frequency'
        frequecy.type='number'
        frequecy.min=30
        frequecy.max=16000
        frequecy.value=50

        const posattck = document.createElement('p')
        posattck.innerText='Attack(ms)';
        const attack = document.createElement('input')
        attack.className="attacks"
        attack.id='attack'
        attack.type='number'
        attack.min=1
        attack.max=1000
        attack.value=1

        const posrelese = document.createElement('p')
        posrelese.innerText='Release(ms)';
        const release = document.createElement('input')
        release.className="releases"
        release.id='release'
        release.type='number'
        release.min=1
        release.max=1000
        release.value=200

        _div.append(pos)
        _div.append(mselect)
        _div.append(posfr)
        _div.append(frequecy)
        _div.append(posattck)
        _div.append(attack)
        _div.append(posrelese)
        _div.append(release)
        // _div.append(octive)
        oscillators.append(_div)
    }
}
loadOscilators()
function getdata() {
    const OscArrays = []
    let Voice__data__ = {}
    for (let i = 0; i < document.getElementById('oscillators').childNodes.length; i++) {
        const element = document.getElementById('oscillators').childNodes[i].childNodes;
        Voice__data__ = {}
        for (let item of element) {
            // console.log(item.id)
            switch (item.id) {
                // case 'P':
                //     Voice__data__.name = item.textContent
                //     break;
                case 'type':
                    Voice__data__.type = item.value
                    break;
                case 'frequency':
                    Voice__data__.frequency=item.value
                    break;
                case 'attack':
                    Voice__data__.Attack=item.value
                    break;
                case 'release':
                    Voice__data__.Release=item.value
                    break;
            }
        }

        OscArrays.push(Voice__data__)
    }
    const pd = {Name: name_.value, data:OscArrays}
    return pd
}


Params = {
    nOsc: 14,
    F: [97.0362, 155.7461, 200.6708, 291.5601, 335.2872, 401.6002, 500.6919,
        599.8203, 679.0558, 704.6314, 850.3987, 1016.353, 1169.165, 1343.452],
    Slope: [-0.71286, -1.08551, -2.68134, -0.80383, -5.88471, -1.06387, -3.419,
    -3.69923, -6.71634, -3.57097, -6.85307, -7.04044, -5.6755, -7.25273],
    Amp0: [-55.7976, -44.8857, -33.3415, -70.8675, -24.9633, -75.653, -27.2338,
    -66.8294, -23.635, -57.3287, -43.0425, -50.9267, -55.1784, -46.6498]
}
var DBToAmp = function (db) { return Math.pow(10, db / 20) }
for (var i = 0; i < Params.nOsc; i++) {
    Params.F[i] = freq(i + 9)
}
function PLAY(fr) {
    const data = getdata()

    const Osc = [], gain = []
    var now = context.currentTime
    for (var i = 0; i < data.data.length; i++) {
        const data_ = data.data[i];
        Osc[i] = context.createOscillator()
        gain[i] = context.createGain()
        gain[i].gain.value = 1
        Osc[i].start()
        Osc[i].connect(gain[i]).connect(context.destination)
    }
    for (var i = 0; i < data.data.length; i++) {
        const data_ = data.data[i];
        Osc[i].detune.value = detuneNumber.value

        let FR=freq(fr)
        // console.log(data_.Attack)
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
    /*for (var i = 0; i < data.data.length; i++) {
        const data_ = data.data[i];
        // console.log(data_.type)
        Osc[i].frequency.setValueAtTime(data_.frequency/10+freq(fr), now)
        // Osc[i].frequency.setValueAtTime(freq(i* 12), now)

        Osc[i].type = data_.type
        gain[i].gain.setValueAtTime(DBToAmp(Params.Amp0[i]), now)
        FinalAmp = DBToAmp(Params.Amp0[i] + Params.Slope[i] * 12 / Duration.value)
        gain[i].gain.exponentialRampToValueAtTime(this.FinalAmp, now + 8)
        gain[i].gain.linearRampToValueAtTime(0, now +12)
    }*/
    
}
function freq(num) {
    return (440/32)*(2**((num-9)/12))
    // return ((440 / 32) * (2 ** ((num - 9)) / 12))
}


const vs=document.getElementById('voice_select')
function voice_select_fn(){
    // vs.childNodes.forEach(item=>{
    //     item.remove()

    // })
    vs.innerHTML='' 
    for(item of dataArray){
        const op = document.createElement('option')
        op.value=JSON.stringify(item.data)
        op.innerText=item.Name
        vs.append(op)
        // console.log(item)
    }
}

function save(){
    const pd = getdata()
    if (pd.Name=='') {
        const n = window.prompt('Enter Name')
        if(n!=null || n != ''){
            pd.Name = n
            ckn()
        }else{
            return
        }
    } else {
        ckn()
    } 
    function ckn(){
        if (pd.Name!='')
        if(!IsNameTaken(pd.Name)){
            dataArray.push(pd)
            voice_select_fn()
        }
    }
}
function IsNameTaken(argument) {
    let isnametaken = false
    for(name11 of dataArray){
        isnametaken =name11.Name==argument ? true:false
    }
    return isnametaken
}
function voice_change(value, index){
    const data_Array = JSON.parse(value)
    NoOsc.value=data_Array.length
    name_.value=voice_select.textContent
    loadOscilators()
    renamevalues(data_Array)
}
var reset = false
function renamevalues(data_Array){
    if(data_Array==undefined){
        NoOsc.value=1
        name_.value=''
        loadOscilators()
        for (var i = 0; i < NoOsc.value; i++) {
           document.querySelectorAll('.waves')[i].value="sine"
           document.querySelectorAll('.frequencies')[i].value='50'
           document.querySelectorAll('.attacks')[i].value='1'
           document.querySelectorAll('.releases')[i].value='200'

        }

    }else{
        for (var i = 0; i < data_Array.length; i++) {
            const data=  data_Array[i]
            document.querySelectorAll('.waves')[i].value=data.type
            document.querySelectorAll('.frequencies')[i].value=data.frequency
            document.querySelectorAll('.attacks')[i].value=data.Attack
            document.querySelectorAll('.releases')[i].value=data.Release
        }
    }
    reset = false
}
getdata()
voice_select_fn()
// voice_select.click()
renamevalues()


detuneNumber.oninput = function () {
  // osc.detune.value = detuneNumber.value
  detuneSlider.value = this.value
  let nnn = this.value>0? (this.value/100):12+(this.value/100)
  interval.selectedIndex=nnn
  console.log(nnn)
}
detuneSlider.oninput = function () {
  // osc.detune.value = detuneNumber.value
  let nnn = this.value>0? (this.value/100):12+(this.value/100)
  interval.selectedIndex=nnn

  detuneNumber.value = this.value
}
interval.oninput = function () {
  // osc.detune.value = this.value
  detuneSlider.value = this.value
  detuneNumber.value = this.value
}
var a=5,dt=0
var t=0
// const song = [0, 2, 4, 5, 7 ,9,11]
let song = [0, 2, 4, 5, 7 ,9,11]
song = [0,0,7,7,9,9,4,4,5,5,0,0,5,5,7,7]
let iny=null
function pp(){
    iny=setInterval(function(){
        if (t<song.length) {
            PLAY(song[t]+(12*a))
        }else{
            detuneNumber.value=dt
            PLAY(song[0]+(12*a))
            t=0
            if (detuneNumber.value==1200) {
                dt=0
                detuneNumber.value=dt
            }
            dt+=100
        }
        // PLAY(t+(12*a))
        console.log(t++)
    
    },1000)
}
function pp2() {
    clearTimeout(iny) 
    t=0
}
