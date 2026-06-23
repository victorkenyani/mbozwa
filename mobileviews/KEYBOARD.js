window.onkeydown = function (e) {
    switch (e.key.toLowerCase()) {
        case "1": TYPE = 1
            changeTYPE("type",TYPE)
            break
        case "2": TYPE = 1 / 2
            changeTYPE("type",TYPE)
            break
        case "3": TYPE = 1 / 4
            changeTYPE("type",TYPE)
            break
        case "4": TYPE = 1 / 8
            changeTYPE("type",TYPE)
            break
        case "5": TYPE = 1 / 16
            changeTYPE("type",TYPE)
            break
        case "6": TYPE = 1 / 32
            changeTYPE("type",TYPE)
            break
        case "#":
            HASH="#"
            changeTYPE("hash",HASH)
            console.log(e)
            break
        case "b":
            HASH="b"
            changeTYPE("hash",HASH)
            break
        case ".":
            DOT="."
            changeTYPE("dot",DOT)
            break
        case "arrowup":
            SELECTEDNOTES.forEach(item=>{
                item.y-=1
            })
            break
        case "arrowdown":
            SELECTEDNOTES.forEach(item=>{
                item.y+=1
            })
            break
        case "arrowleft":
            SELECTEDNOTES.forEach(item=>{
                item.x-=1
            })
            break
        case "arrowright":
            SELECTEDNOTES.forEach(item=>{
                item.x+=1
            })
            break
        case "delete":
            if(JSON.stringify(SELECTEDNOTES)==JSON.stringify(NOTES)){
                NOTES=[]

            }else{
                SELECTEDNOTES.forEach(item=>{
                    NOTES.splice(NOTES.indexOf(item),1)
                })

            }
            SELECTEDNOTES=[]
            break;
        case "c":
            if(e.ctrlKey){

               copypaste__()
                
            }

        break
    }
    Canvas_class.Update()

}

function changeTYPE(key, value){
    if(SELECTEDNOTES.length!=0){

        SELECTEDNOTES.forEach(item=>{
            item[key]=value
        })
    }
}

function copypaste__(){
    const a=[]
    console.log(NOTES.length)

    TEMPARRAY = SELECTEDNOTES.map(item=>{
        return copypaste2(item)
    })
    TEMPARRAY.forEach(item=>{
        NOTES.push(item)
    })
    exitEdit()
    SELECTEDNOTES=TEMPARRAY
    console.log(NOTES.length)

    return a
    
}
function add(e,i,a){
    // console.log("indx",i,
    //     "elem",e,
    //     "array",a)
    e.x = get_LASTNOTE()+1
    TEMPARRAY.push(e)
}
function copypaste2(tempdata){
    newdata={}
    for (const key in tempdata) {
        if (!Object.hasOwn(tempdata, key)) continue;
        
        let element = tempdata[key];
        if(key=="x"){
            element+=get_LASTNOTE()-5
        }
        newdata[key]=element
        
        
    }
    return(newdata)
}