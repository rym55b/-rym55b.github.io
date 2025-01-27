let nbr;
let vc = '0';
let pv = ''; // Première valeur
let opp = ''; // Opération choisie
let nop = true ; 


function nbrpris(nbr){	//NOMBRE PRIS
if (nop){	if (vc =='0'){
		vc = String(nbr);
	} else {
		vc += String(nbr);
	} majscreen(); //MIS A JOUR ECRAN
} else { vc = "veillez effacer le resultat";
	majscreen();
}}
function oppris(op) {
    if (pv === '') {
        pv = vc;
        opp = op;
        vc = '0';
    } else {
        calculresult();
        pv = vc;
        opp = op;
    }
    majscreen(); // Mise à jour de l'écran
}

function retour (){
	if  (vc.length > 1){
		vc = vc.slice(0,-1);
		} else {vc = '0';}
		majscreen();
	
}



function calculresult() {
    if (pv !== '') {
        let result;
        switch (opp) {
            case '+':
                result = parseFloat(pv) + parseFloat(vc);
                break;
            case '-':
                result = parseFloat(pv) - parseFloat(vc);
                break;
            case '*':
                result = parseFloat(pv) * parseFloat(vc);
                break;
            case '/':
                if (parseFloat(vc) === 0) { // Prévenir la division par zéro
                    result = "Erreur";
                } else {
                    result = parseFloat(pv) / parseFloat(vc); // Division
                }
                break;
            default:
                result = vc;
				
                break;
        }

        if (result === "Erreur") {
            vc = result;
        } else {
            vc = String(result);
        }
        nop = false ;
        pv = '';
        opp = '';
        majscreen(); // Mise à jour de l'écran
    }
}

function efface(){
	pv = '';
	vc = '0';
	opp ='';
	nop = true
	majscreen(); //MIS A JOUR ECRAN
}
	


function majscreen(){
	document.getElementById('screen').textContent = vc;
}