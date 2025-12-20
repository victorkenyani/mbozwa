// console.log("qwerty")

let qwe = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0", "p", "[", "=", "]","backspace","shift","a","z","x","d","c","f","v","b","h","n","j","m","k",",",".",";","/","'",]

var oct=3
document.onkeydown=(e)=>{
	// e.preventDefault()
	try{
		const pid = qwe.indexOf(e.key.toLowerCase())
		if (pid==-1) {
			if (e.key=" ") {
				console.log("play")
			}
		}else{
			const id = pid+(12*oct)
			let this_ = document.getElementById(id)
			if (this_.style.backgroundColor=='') {
				this_.style.backgroundColor='yellow'
				playsound(id)
			}
			// MediaPlayer.Play(pid)

		}


	}catch(e){}
}
document.onkeyup=(e)=>{
	try{
		const pid = qwe.indexOf(e.key.toLowerCase())
		const id = pid+(12*oct)
			let this_ = document.getElementById(id)
			if (this_.style.backgroundColor=='yellow') {
				this_.style.backgroundColor=''
				stopsound(id)
			}

	}catch(e){}
	
}


