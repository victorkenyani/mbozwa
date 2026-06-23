function Save(){
    // const NOTES=[1,6,"reee",6]
    let name = "Test1"
    name = window.prompt("Enter name of song", title.textContent.replace("TITLE : ",""))
    if(name==undefined){
        return
    }else{
        title.textContent=`TITLE : ${name}`

    }
    
    if (NOTES.length==0) {

    } else {
        const data = NOTES
        fetch("/Files/write",
        {
            headers:{
                "Content-Type":"application/json"
            },
            method:"post",
            body:JSON.stringify({name:name, data:NOTES, lines:VLINES, settings:{TEMPO:TEMPO.value}})
        }).then(resp=>{

            if(resp.ok){
                return resp.json()
            }
        }).then(value=>{
            
            // console.log(value)
        }).catch(e=>{
            console.log(e)
        })
    }
    // loadDATA()
}

let tttt=[]
/*id_read.onclick = ()=>{
    // const NOTES=[1,6,"reee",6]
    let name = "Tr no"
    // name = window.prompt("Enter name of song","Test1")
    load(name)
    fetch("/Files/read",
    {
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify({name:name})
    }).then(resp=>{

        if(resp.ok){
            return resp.json()
        }
    }).then(value=>{
        tttt=value.data
        // console.log(tttt, NOTES)
        NOTES=tttt
        Graphics.START()
    }).catch(e=>{
        console.log(e)
    })
    Graphics.START()

    
}*/

function load(name){
	name = window.prompt("Enter name of song", title.textContent.replace("TITLE : ",""))
    if(name==undefined){
        return
    }else{
        title.textContent=`TITLE : ${name}`

    }
    
    fetch("/Files/read",
    {
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify({name:name})
    }).then(resp=>{

        if(resp.ok){
            return resp.json()
        }
    }).then(value=>{
        indata=value.data
        // console.log(indata, value)
        NOTES2C=indata.data
        NOTES=indata.data
        VLINES=indata.lines
        title.textContent=`TITLE : ${indata.name}`
        Startconverter()
		forceScreen()
    }).catch(e=>{
        console.log(e)
    })
}
// const input = document.querySelector("input[type='file']")
// input.onchange=function (e) {
//     const reader = new FileReader()
//     reader.onload = function () {
//         const lines=reader.result
//         //screen.notes=JSON.parse(lines)
//         song=JSON.parse(lines)
//         NOTES=song[0]
//         reformart()
//         Graphics.START()
//     }
//     reader.readAsText(input.files[0])
    
// }

function encrypt1(){
    const dataa = 
    (`[[{"posx":4,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":4,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":6,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":6,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":9,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":10,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":12,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":12,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":15,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":15,"posy":19,"hash":"","type":0.5,"dot":""},{"posx":16,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":16,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":18,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":18,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":11,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":14,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":4,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":4,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":5,"posy":13,"hash":"b","type":0.125,"dot":""},{"posx":6,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":6,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":7,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":8,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":8,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":9,"posy":12,"hash":"","type":0.5,"dot":""},{"posx":9,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":10,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":10,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":11,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":12,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":12,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":11,"hash":"","type":0.25,"dot":""},{"posx":13,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":14,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":15,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":15,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":16,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":16,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":17,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":18,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":18,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":19,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":20,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":19,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":20,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":19,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":20,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":19,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":20,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":22,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":22,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":23,"posy":12,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":24,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":25,"posy":18,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":16,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":25,"posy":7,"hash":"","type":0.5,"dot":""},{"posx":26,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":26,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":13,"hash":"b","type":0.125,"dot":""},{"posx":26,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":26,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":27,"posy":18,"hash":"","type":0.125,"dot":""},{"posx":28,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":28,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":11,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":30,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":30,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":31,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":31,"posy":12,"hash":"","type":0.5,"dot":""},{"posx":31,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":32,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":32,"posy":12,"hash":"","type":0.125,"dot":""},{"posx":32,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":34,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":34,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":33,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":33,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":35,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":11,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":35,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":36,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":29,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":29,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":38,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":19,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":38,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":39,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":39,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":40,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":41,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":42,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":43,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":42,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":42,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":41,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":42,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":43,"posy":6,"hash":"b","type":0.25,"dot":""},{"posx":44,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":12,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":45,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":47,"posy":14,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":17,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":12,"hash":"","type":0.5,"dot":"*"},{"posx":47,"posy":10,"hash":"","type":0.5,"dot":"*"},{"posx":48,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":11,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":48,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":49,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":50,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":44,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":45,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":46,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":51,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":51,"posy":19,"hash":"","type":0.5,"dot":""},{"posx":52,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":52,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":19,"hash":"","type":0.125,"dot":""},{"posx":51,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":51,"posy":10,"hash":"","type":0.5,"dot":""},{"posx":52,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":52,"posy":10,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":53,"posy":9,"hash":"","type":0.125,"dot":""},{"posx":47,"posy":3,"hash":"","type":0.5,"dot":"*"},{"posx":57,"posy":15,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":11,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":18,"hash":"","type":0.5,"dot":""},{"posx":57,"posy":20,"hash":"b","type":0.5,"dot":""},{"posx":54,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":22,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":12,"hash":"","type":0.25,"dot":""},{"posx":54,"posy":8,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":8,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":8,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":56,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":55,"posy":15,"hash":"","type":0.25,"dot":""},{"posx":58,"posy":20,"hash":"b","type":0.125,"dot":""},{"posx":58,"posy":18,"hash":"","type":0.125,"dot":""},{"posx":59,"posy":20,"hash":"b","type":0.125,"dot":""},{"posx":59,"posy":18,"hash":"","type":0.125,"dot":""},{"posx":60,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":20,"hash":"b","type":0.25,"dot":""},{"posx":61,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":16,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":21,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":18,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":17,"hash":"","type":0.125,"dot":""},{"posx":67,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":67,"posy":19,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":17,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":18,"hash":"","type":0.25,"dot":""},{"posx":70,"posy":17,"hash":"","type":0.5,"dot":""},{"posx":70,"posy":14,"hash":"","type":0.5,"dot":""},{"posx":58,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":59,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":58,"posy":9,"hash":"","type":0.25,"dot":""},{"posx":59,"posy":9,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":60,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":61,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":62,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":63,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":12,"hash":"","type":0.25,"dot":""},{"posx":64,"posy":10,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":65,"posy":5,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":5,"hash":"","type":0.125,"dot":""},{"posx":66,"posy":14,"hash":"","type":0.125,"dot":""},{"posx":67,"posy":14,"hash":"","type":0.25,"dot":""},{"posx":67,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":68,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":7,"hash":"","type":0.25,"dot":""},{"posx":70,"posy":3,"hash":"","type":0.5,"dot":""},{"posx":68,"posy":12,"hash":"","type":0.25,"dot":""},{"posx":69,"posy":13,"hash":"b","type":0.25,"dot":""},{"posx":71,"posy":5,"hash":"","type":0.25,"dot":""}],[5,8,11,14,17,20,21,24,27,30,33,36,37,40,43,46,47,50,53,56,59,62,66,69],[{"0":{"hash":"","octive":0,"index":0,"id":0,"text":"C","pos":0,"x":30,"y":334,"width":2250},"1":{"hash":"","octive":0,"index":1,"id":2,"text":"D","pos":1,"x":30,"y":324,"width":2250},"2":{"hash":"","octive":0,"index":2,"id":4,"text":"E","pos":2,"x":30,"y":314,"width":2250},"3":{"hash":"","octive":0,"index":3,"id":5,"text":"F","pos":3,"x":30,"y":304,"width":2250},"4":{"hash":"","octive":0,"index":4,"id":7,"text":"G","pos":4,"x":30,"y":294,"width":2250},"5":{"hash":"","octive":0,"index":5,"id":9,"text":"A","pos":5,"x":30,"y":284,"width":2250},"6":{"hash":"b","octive":0,"index":6,"id":11,"text":"B","pos":6,"x":30,"y":274,"width":2250},"7":{"hash":"","octive":1,"index":0,"id":12,"text":"C","pos":7,"x":30,"y":264,"width":2250},"8":{"hash":"","octive":1,"index":1,"id":14,"text":"D","pos":8,"x":30,"y":254,"width":2250},"9":{"hash":"","octive":1,"index":2,"id":16,"text":"E","pos":9,"x":30,"y":244,"width":2250},"10":{"hash":"","octive":1,"index":3,"id":17,"text":"F","pos":10,"x":30,"y":234,"width":2250},"11":{"hash":"","octive":1,"index":4,"id":19,"text":"G","pos":11,"x":30,"y":224,"width":2250},"12":{"hash":"","octive":1,"index":5,"id":21,"text":"A","pos":12,"x":30,"y":214,"width":2250},"13":{"hash":"b","octive":1,"index":6,"id":23,"text":"B","pos":13,"x":30,"y":204,"width":2250},"14":{"hash":"","octive":2,"index":0,"id":24,"text":"C","pos":14,"x":30,"y":194,"width":2250},"15":{"hash":"","octive":2,"index":1,"id":26,"text":"D","pos":15,"x":30,"y":184,"width":2250},"16":{"hash":"","octive":2,"index":2,"id":28,"text":"E","pos":16,"x":30,"y":174,"width":2250},"17":{"hash":"","octive":2,"index":3,"id":29,"text":"F","pos":17,"x":30,"y":164,"width":2250},"18":{"hash":"","octive":2,"index":4,"id":31,"text":"G","pos":18,"x":30,"y":154,"width":2250},"19":{"hash":"","octive":2,"index":5,"id":33,"text":"A","pos":19,"x":30,"y":144,"width":2250},"20":{"hash":"b","octive":2,"index":6,"id":35,"text":"B","pos":20,"x":30,"y":134,"width":2250},"21":{"hash":"","octive":3,"index":0,"id":36,"text":"C","pos":21,"x":30,"y":124,"width":2250},"22":{"hash":"","octive":3,"index":1,"id":38,"text":"D","pos":22,"x":30,"y":114,"width":2250},"23":{"hash":"","octive":3,"index":2,"id":40,"text":"E","pos":23,"x":30,"y":104,"width":2250},"24":{"hash":"","octive":3,"index":3,"id":41,"text":"F","pos":24,"x":30,"y":94,"width":2250},"25":{"hash":"","octive":3,"index":4,"id":43,"text":"G","pos":25,"x":30,"y":84,"width":2250},"26":{"hash":"","octive":3,"index":5,"id":45,"text":"A","pos":26,"x":30,"y":74,"width":2250},"27":{"hash":"b","octive":3,"index":6,"id":47,"text":"B","pos":27,"x":30,"y":64,"width":2250},"28":{"hash":"","octive":4,"index":0,"id":48,"text":"C","pos":28,"x":30,"y":54,"width":1034},"length":28,"-1":{"hash":"","octive":-1,"index":-1,"id":-14,"text":"undefined","pos":-1,"x":30,"y":344,"width":1034},"-2":{"hash":"","octive":-1,"index":-2,"id":-16,"text":"undefined","pos":-2,"x":30,"y":354,"width":1034},"-3":{"hash":"","octive":-1,"index":-3,"id":-18,"text":"undefined","pos":-3,"x":30,"y":364,"width":1034},"-4":{"hash":"","octive":-1,"index":-4,"id":-20,"text":"undefined","pos":-4,"x":30,"y":374,"width":1034},"-5":{"hash":"","octive":-1,"index":-5,"id":-22,"text":"undefined","pos":-5,"x":30,"y":384,"width":1034},"-6":{"hash":"","octive":-1,"index":-6,"id":-24,"text":"undefined","pos":-6,"x":30,"y":394,"width":1034},"-7":{"hash":"","octive":-1,"index":-7,"id":-26,"text":"undefined","pos":-7,"x":30,"y":404,"width":1034},"-8":{"hash":"","octive":-2,"index":-8,"id":-40,"text":"undefined","pos":-8,"x":30,"y":414,"width":1034},"-9":{"hash":"","octive":-2,"index":-9,"id":-42,"text":"undefined","pos":-9,"x":30,"y":424,"width":1034},"-10":{"hash":"","octive":-2,"index":-10,"id":-44,"text":"undefined","pos":-10,"x":30,"y":434,"width":1034}}]]`);
    song = JSON.parse(dataa)
    NOTES=song[0]
    LINESDATAS=song[1]
    LINESDATA=song[2][0]
    REFRESH()
    return song

}

function loadDATA(){
    SONGS.innerHTML='<option value="0">no song---</option>'
    fetch("Files/read",{}).then(resp=>{
        if(resp.ok){
            return resp.json()
        }
    }).then(value=>{
        var i=1
        value.data.forEach(item=>{
            const opt= document.createElement("option")
            opt.value=item
            opt.textContent=`${i} : ${item}`
            SONGS.append(opt)
            i++
        })

    }).catch(e=>{

    })
}