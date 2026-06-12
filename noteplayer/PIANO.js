const PIANO = document.querySelector('footer')
function makekeys() {
	let key_width = 40
	let B_width = key_width/4
	for (var i = 0; i < 88; i++) {
		data = getkeys(i)
		keys = document.createElement("button")
		keys.className = "keys white"
		keys.id=data.id
		keys.textContent = data.text
		style=keys.style
		style.left=`${i* key_width}px`
		style.width=`${ key_width-5}px`
		// keys.onpointerdown = function(){
		// 	KEYDOWN(this.id)
		// }

		// keys.onpointerup = function(){
		// 	KEYUP(this.id)
		// }
		PIANO.append(keys)

	}
	for (var i = 0; i < 88; i++) {
		data = getkeys(i)

		keys = document.createElement("button")
		keys.className = "keys black"
		keys.id=data.id+1
		keys.textContent = `${data.text}#`
		style=keys.style
		style.left=`${( key_width/2)+(B_width/2) + i* key_width}px`
		style.width=`${( key_width-5) - B_width}px`
		// keys.onpointerdown = function(){
		// 	KEYDOWN(this.id)
		// }

		// keys.onpointerup = function(){
		// 	KEYUP(this.id)
		// }
		if(!data.text.includes("E") && !data.text.includes("B")){
			PIANO.append(keys)
		}


	}
}

makekeys()
