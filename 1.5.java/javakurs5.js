/*
1.5. Pitati korisnika da unese broj, proveriti da li je on paran i veći od 25
*/

var broj = prompt('Unesi broj:')

if (broj%2 == 0 && broj > 25){
	console.log('Izabrani broj je paran i veći od 25');
}

else if (broj%2 == 0 && broj<25){
	console.log('Izabrani broj je paran i manji od 25')
}

else{
	console.log('Izabrani broj je neparan')
}