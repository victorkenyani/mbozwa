let Keys=""
function getKeys() {

    const notes = ["c", "d", "e", "f", "g", "a", "b"]
    // var j = 0, idb=1+36, idw=36, keysnum=63-21
    var j = 0, idb=1+36, idw=36, keysnum=63-21
    for (var i = 0; i < keysnum+1; i++) {

        if (j > 6){ 
            j = 0;
        } 
        let keys = document.createElement("button");
        keys.className = "keys white"
        keys.textContent = notes[j];
        let style = keys.style;
        style.left = `${3 + (45 * i)}px`
        document.getElementById("Body_").append(keys);
        j++
    }
    j=0
    for (var i = 0; i < keysnum; i++) {
        if (j > 6){ 
            j = 0;
        } 
        
        let keys = document.createElement("button");
        keys.className = "keys black"
        keys.textContent = notes[j] + "#";
        let style = keys.style;
        style.left = `${32-4 + (45 * i)}px`
        document.getElementById("Body_").append(keys)
        j++

    }
    Keys=document.querySelectorAll(".keys")
    Keys.forEach(item=>{
        if(item.textContent.includes("e#") || item.textContent.includes("b#")){
            item.remove()
        }
        
        
        
    })
    Keys.forEach(item=>{
        
        if(!item.textContent.includes("#")){
            item.id=idw
            if(item.textContent.includes("e") || item.textContent.includes("b")){
                idw+=1
            }else{
                idw+=2

            }          
        }else{
            item.id=idb
            if(item.textContent.includes("d") || item.textContent.includes("a")){
                idb+=1
            }else{
                idb+=2

            }
            
        }
        item.onmousedown=()=>{
           keydown_(item.id)

        }
        item.onmouseup=()=>{
           keyup_(item.id)

        }
    })

}
getKeys()