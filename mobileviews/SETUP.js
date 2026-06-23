
function Makedata(w, h) {
	LINEDATA = []
	if (w==undefined) {
		w = Canvas.width
	}
	const octive = 3
	const md = {}
	// for (var i = STAFFLINES * 2 - 1; i >= 0; i--) {
	// 	const data = getkeys(i)
	// 	md[i] = data
	// }
	for (var i = 0; i < STAFFLINES * 2; i++) {
		const data = getkeys(i)
		// md[i] = data
		LINEDATA.push(data)
	}
	// GAP = Math.round(h/LINEDATA.length)
	LINEDATAR= LINEDATA.reverse()
	GAP = (h/LINEDATA.length)*2

	// console.log()
	return md
}