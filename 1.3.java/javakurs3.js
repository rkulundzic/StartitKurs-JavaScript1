/*
1.3.Pitati korisnika da unese 2 od 3 osnovne boje (crvena, žuta i plava) 
i ispisati mu koju je boju dobio mešanjem. 
Obavestiti korisnika ako je uneo pogrešne boje
*/

var prvaBoja = prompt('Izaberi prvu od tri osnovne boje:');
var drugaBoja = prompt('Izbari drugu od tri osnovne boje:');

// if (prvaBoja!=='crvena' || prvaBoja!=='plava' || prvaBoja!=='žuta') {
// 	console.log('Pogrešan unos!');
// }

// if (drugaBoja!=='crvena' || drugaBoja!=='plava' || drugaBoja!=='žuta'){
// 	console.log('Pogrešan unos!');
// }

if (prvaBoja==='crvena' && drugaBoja==='plava' || prvaBoja==='plava' && drugaBoja==='crvena'){
	console.log('Ljubičasta');
}

else if (prvaBoja==='crvena' && drugaBoja==='žuta' || prvaBoja==='žuta' && drugaBoja==='crvena'){
	console.log('Narandžasta');
}

else if (prvaBoja==='žuta' && drugaBoja==='plava' || prvaBoja==='plava' && drugaBoja==='žuta'){
	console.log('Zelena');
}

else if(prvaBoja===drugaBoja){
	console.log(prvaBoja);
}

else{
	console.log('Pogrešan unos!');
}
