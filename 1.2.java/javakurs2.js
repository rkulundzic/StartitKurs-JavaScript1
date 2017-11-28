/*1.2 zadatak: Pitati korisnika za godine, ukoliko ima ispod 7 ispisati mu 
poruku da je pristup zabranjen, ukoliko ima između 7 i 16 ispisati da ima 
limitiran pristup, u suprotnom ispisati da ima pun pristup.*/

var age = prompt('Molimo unesite broj godina:');

if (age <= 7) {
	console.log('Zabranjen pristup!');
}
else if(age > 7 && age <=16) {
	console.log('Pristup ograničen!')
}
else{
	console.log('Dozvoljen pristup!')
}