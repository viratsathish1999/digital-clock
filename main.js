const days=["sun","mon","tue","wed","thu","fri","sat"];
const months=["jan","feb","mar","april","may","june","july","august","sep","oct","nov","dec"];

var timer=setInterval(()=>{
	var curent_date =new Date();
	
	if(curent_date.getHours()>12){
		console.log(curent_date.getHours()-12)
		document.querySelector(".hour").innerHTML= curent_date.getHours()-12;	
    document.querySelector(".ampm").innerHTML= "PM";
	}
	else{
		document.querySelector(".hour").innerHTML= curent_date.getHours();	
    document.querySelector(".ampm").innerHTML= "AM";
	}

	document.querySelector(".munites").innerHTML= curent_date.getMinutes();
	document.querySelector(".second").innerHTML= curent_date.getSeconds();
	
	document.querySelector(".day").innerHTML=days[curent_date.getDay()]
	document.querySelector(".today").innerHTML= curent_date.getDate();
	document.querySelector(".month").innerHTML=months[curent_date.getMonth()];
	document.querySelector(".year").innerHTML= curent_date.getFullYear();
	
},1000)