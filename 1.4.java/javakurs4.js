/*
1.4.Pitati korisnika da unese omiljeni html tag i ime 
i ispisati mu kako izgleda html kod koji bi okružio ime html tagom. 
Primer: Korisnik unosi “section” i “Pera”, 
potrebno je ispisati “<section>Pera</section>”
*/

var tag = prompt('Unesi omiljeni tag (p, h1, div, section):')
var ime = prompt('Unesi svoje ime:')

// if (tag!==p || tag!==h1 || tag!==div || tag!==article || tag!==section){
// 	console.log('Pogrešan unos!');
// }

if (tag==='p'){
	console.log("<p>" + ime + "</p>");
}

else if (tag==='h1'){
	console.log("<h1>" + ime + "</h1>");
}

else if (tag==='div'){
	console.log("<div>" + ime + "</div>");
}

else if (tag==='section'){
	console.log("<section>" + ime + "</section>");
}

else{
	console.log('Pogrešno unet tag!');
}