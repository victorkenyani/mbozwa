// ===============================
// HELPER: GENERATE RANDOM STRING
// ===============================
function randomString(length) {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  	let result = "";
  	for (let i = 0; i < length; i++) {
    	result += chars.charAt(Math.floor(Math.random() * chars.length));
  	}
  	return result;
}


const newUser = function() {
	// ===============================
	// 1️⃣ GENERATE VOUCHER CREDENTIALS
	// ===============================

	const username = randomString(6); // e.g A9K2LM
	const password = "mbozwa"/*randomString(4); // e.g 7FQ2*/
	return {username:username, password:password}
}

module.exports = {newUser}