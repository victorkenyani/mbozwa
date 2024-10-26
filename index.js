let iparr = [];
let inputarrays=[];
//ten = document.getElementById("img1")
let ips = "123.123.123.12"
//database();
b1=document.getElementById("img1")
b1.onclick = btn10;
document.getElementById("img2").onclick = btn10;
document.getElementById("img3").onclick = btn10;
document.getElementById("img4").onclick = btn10;
document.getElementById("img5").onclick = btn10;
document.getElementById("img6").onclick = btn10;
document.getElementById("img7").onclick = btn10;
t1 = b1.value;
ip_to_binary()
function ip_to_binary(e){
	disp ("ip"+e)
};

function btn10(){

	mdata = JSON.stringify(database(ips,t1,t1 )[1].code);
	disp(b1.value);
}
// disp(json_database());
json_database2();

function json_database(pos=0){
	return JSON.stringify(database()[pos]);
}

function database(ip = "123.456.789.0",code = "QDGE56",status = "ACTIVE"){
	const data = {"ip":ip, "code":code, "status":status};
	inputarrays.push(data);
	inputarrays.join(',');
	const dataArrays = [data];
	return inputarrays;

}


function disp(argument) {
	console.log(argument);
}

function json_database2(){

	
	myjson = {
		"p123p456p789p0":{
			"code":"MPESAD12",
			"start":   "20240114003001",
			"duration":"00000000004000",
			"stop":    "20240114004001",
			"status":  "ACTIVE"
		},

		"p123p456p789p1":{
			"code":"MPErr12",
			"start":   "20240114003001",
			"duration":"00000000004000",
			"stop":    "20240114004001",
			"status":  "ACTIVE"
		},

		"p123p456p789p2":{
			"code":"MPESAD1r",
			"start":   "20240114003001",
			"duration":"00000000004000",
			"stop":    "20240114004001",
			"status":  "ACTIVE"
		}
	}
	try{
		path = 'data.json';
		fetch(path).then(response =>response.json()).then(value => myjson);
	}catch (err){
		disp('error'+
			err)
	}

	dta = JSON.stringify(myjson);
	dta2 = JSON.parse(dta);


	disp(dta2.p123p456p789p1.code);
	disp(dta2.p123p456p789p1.start);
	disp(dta2.p123p456p789p1.status);

}



// fetch("background/data.json").then(response =>response.json()).then(value => jsonfile(value));

// function jsonfile(f){
// b1.textContent=f.ip

// }
