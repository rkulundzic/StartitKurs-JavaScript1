/*
1.6.Pitati korisnika da unese mesec u kom je rodjen i ispisati mu koji je sledeci mesec.
Korisnik moze da unese i broj.
*/

var mesec = prompt('Unesite mesec rodjenja:');

if (mesec==='januar' || mesec==='1'){
	console.log('Sledeći mesec je februar');
} 

else if (mesec==='februar' || mesec==='2'){
	console.log('Sledeći mesec je mart');
}

else if (mesec==='mart' || mesec==='3'){
	console.log('Sledeći mesec je april');
}

else if (mesec==='april' || mesec==='4'){
	console.log('Sledeći mesec je maj');
}

else if (mesec==='maj' || mesec==='5'){
	console.log('Sledeći mesec je jun');
}

else if (mesec==='jun' || mesec==='6'){
	console.log('Sledeći mesec je jul');
}

else if (mesec==='jul' || mesec==='7'){
	console.log('Sledeći mesec je avgust');
}

else if (mesec==='avgust' || mesec==='8'){
	console.log('Sledeći mesec je septembar');
}

else if (mesec==='septembar' || mesec==='9'){
	console.log('Sledeći mesec je oktobar');
}

else if (mesec==='oktobar' || mesec==='10'){
	console.log('Sledeći mesec je novembar');
}

else if (mesec==='novembar' || mesec==='11'){
	console.log('Sledeći mesec je decembar');
}

else if (mesec==='decembar' || mesec==='12'){
	console.log('Sledeći mesec je januar');
}

else{
	console.log('Pogrešan unos!')
}