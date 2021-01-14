// tuto JS #0
// prompt("Comment ça va?");

//Tuto JS #1 Les variables
/*var maVariable = 10;
var typeDeVariable = typeof maVariable;
alert(maVariable);
alert(typeDeVariable);*/

/*var humeur = prompt("Comment ça va?");
var prenom = prompt("Comment t'appelles-tu?");
var phrase = "Tu t'appelles " + prenom + " et tu vas " + humeur + " ! ";
alert(phrase);*/

/*console.log("Affichage du message de bienvenue");
alert("Bienvenue dans notre programme d'addition");

var nombreUn = prompt("Entrez Votre premier nombre");
console.log("L'utilisateur a entré le nombre " + nombreUn );

var nombreDeux = prompt("Entrez votre second nombre");
console.log("L'utilisateur a entré le nombre " + nombreDeux );

console.log("Opération en cours");
var resultat = Number(nombreUn) + Number(nombreDeux);

console.log("Affichage du resultat " +resultat);
alert(resultat);*/

//Tuto JS #2 Les conditions
//  var userInput = prompt("Entrez votre note");

//  if (userInput > 0 && userInput <10) {
//      alert("peut mieux faire...");
//  } else if (userInput == 10) {
//     alert("Pile la moyenne");
//  } else if (userInput > 10 && userInput < 20) {
//      alert("Pas mal");
//  } else if (userInput == 20) {
//      alert("Génial");
//  } else {
//      alert("Je ne comprends pas ta note");
//  }



// var confirme = confirm("Voulez vous entrez dans ma page ?");

// if(confirme) {
//     alert("Super !");
// } else {
//     alert("Dommage");
// }

/*var lagagePrefere = prompt("Entrez votre langage preféré");

switch(lagagePrefere)  {
    case "PHP":
        alert("Pas mal, mais y a mieux");
        break;
    case "JS":
        alert("Parfait");
        break;
    case "Ruby":
        alert("Ruby");
        break;
    case "Python":
        alert("Bof");
        break;
    
    default: 
    alert("Je ne connais pas ton langage");
}*/

//Tuto JS #4 Les boucles
/*alert("Bonjour, Bienvenue dans notre programme d'addition");

do {
    nbr1 = parseInt(prompt("Veuillez entrer votre premier nombre"));
} while (isNaN(nbr1));

do {
    nbr2 = parseInt(prompt("Veuillez entrer votre second nombre"));
} while (isNaN(nbr2));

var resultat = nbr1 + nbr2;

alert(nbr1 + ' + ' + nbr2 + ' = ' + resultat); */

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }



//Tuto JS #5 Les tableaux Partie1
// var pseudo = 'Thierno';
// var tableau = ['PHP', 'JS', 'C#', 'Ruby', 5, pseudo]

// console.log(tableau);
// console.log(tableau[1]);

// tableau[3] = 'Python';
// console.log(tableau);

// //ajouter deux valeurs à la fin du tableau
// tableau.push('HTML', 'CSS'); 
// console.log(tableau);

// //supprimer la denière valeur du tableau
// tableau.pop();
// console.log(tableau);


// var langagesProg = [];

// while(true) {
//     var prompText = prompt("Entrez un langage de programmation");
//     if(prompText != '') {
//         langagesProg.push(prompText);
//     } else {
//         break;
//     }
// }

// console.log(langagesProg);

//Tuto JS #6 Les tableaux Partie2
// var langagesProg = [];

// var prompText = prompt("Entrez le nom d'un langage de prog");
// if(langagesProg.indexOf(prompText) != -1) {
//     alert("Ton langage existe");
// } else {
//     alert("ton langage n'existe pas");
// }


// console.log(langagesProg);
//place les items dans le tableau
// langagesProg.splice(2, 0, 'PHP', 'JS');
// console.log(langagesProg);

// console.log(langagesProg);
//retourne le nombre d'items 
//dans le tableau
// console.log(langagesProg.length)

// var langagesProg = [];

// while(true) {
//     var prompText = prompt("Entrez un langage de programmation");
//     if(prompText != '') {
//         langagesProg.push(prompText);
//         } else {
//             break;
//         }
//     }
//     console.log(langagesProg[i]);
//     for(var i = 0; i < langagesProg.length; i++) {
//         console.log("Index => " + i + " | valeur => " + langagesProg[i]);
//     }



// var langagesProg = ['PHP', 'JS', 'Ruby'];
// langagesProg.push('C++');
// var langagesProgText = langagesProg.join(' et ');
// console.log(langagesProgText);

// var langagesProg = [];

// while(true) {
//     var prompText = prompt("Entrez un langage de programmation");
//     if(prompText != '') {
//         langagesProg.push(prompText);
//         } else {
//             break;
//         }
//     }
//     console.log(langagesProg);
    
//     //met un tiret entre les éléments du tableau
//     var langagesProgText = langagesProg.join(' - ');
//     alert("Vous avez entrez les langages de programmation suivants :" +langagesProgText);

//transfromer un string en tableau
// var langagesProg = 'C++ - PHP - HTML';

// var langagesProgArray = langagesProg.split(' - ');
// console.log(langagesProgArray);






// Tuto JS #5-1 Les fonctions

// function additionne(nbr1, nbr2) {
//     var resultat = (Number(nbr1) + Number(nbr2));
//     return resultat;
// }

// var prompt1 = prompt("votre nombre 1");
// var prompt2 = prompt("Votre nombre 2");

// var add = additionne(prompt1, prompt2);
// console.log(add);

// var bjr = "Hello";
// function modifieBjr() {
//     bjr = "Salut";
// }
// alert(bjr);
// modifieBjr();
// alert(bjr);

//une autre façon
// var bjr = "Hello";
// var modifieBjr = function() {
//     bjr = "Salut";
// };
// alert(bjr);
// modifieBjr();
// alert(bjr);



//Tuto JS #8 Les Objets

// var utilisateur = {
//     nom: "Paul", age:25, sexe: "M"
// };

// console.log(utilisateur.nom);

// var utilisateur = {
//     nom: {
//         prenom:"Paul", 
//         famille:"Dupont"
//     }, 
//     age:25, 
//     sexe: "M"
// };
// console.log(utilisateur.nom.prenom);

// function Personne(nom, age, sexe) {
//     this.nom = nom;
//     this.age = age;
//     this.sexe = sexe;
// }

// var utilisateur1 = new Personne("Paul", 25, "M");
// var utilisateur2 = new Personne("Mathieu", 25, "M");

// utilisateur2.nom = "Jean";

// console.log(utilisateur1);
// console.log(utilisateur2);


// function Personne(nom, age, sexe) {
//     this.nom = nom;
//     this.age = age;
//     this.sexe = sexe;
// }

// function Voiture(fabricant, annee, propietaire) {
//     this.fabricant = fabricant;
//     this.annee = annee;
//     this.propietaire = propietaire;
// }

// var utilisateur1 = new Personne("Paul", 25, "M");
// var utilisateur2 = new Personne("Mathieu", 25, "M");

// var voiture = new Voiture("Paul", "2005", utilisateur1);

// utilisateur1.nom = "Jean";


// console.log(voiture);
// alert(voiture.propietaire.age);



// function Personne(nom, age, sexe) {
//     this.nom = nom;
//     this.age = age;
//     this.sexe = sexe;
// }

// function Voiture(fabricant, annee, propietaire) {
//     this.fabricant = fabricant;
//     this.annee = annee;
//     this.propietaire = propietaire;

//     this.genererMessage = function() {
//         alert(this.propietaire.nom+ " possède une " + this.fabricant + " de " + this.annee);
//     }
// }

// var utilisateur1 = new Personne("Paul", 25, "M");
// var utilisateur2 = new Personne("Mathieu", 25, "M");

// var voiture = new Voiture("Peugeot", "2005", utilisateur1);


// voiture.genererMessage();


// voiture.propietaire = utilisateur2;


// voiture.genererMessage();


// Tuto JS #9 Récupérer des éléments HTML

// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

// var paragraphes = document.getElementsByTagName("p");
// for(var i = 0; i < paragraphes.length; i++) {
//     console.log(paragraphes[i].innerHTML);
//     alert(paragraphes[i].innerHTML);
// }


// var pseudo = document.getElementsByName("pseudo");
// for(var i = 0; i < pseudo.length; i++) {
//     console.log(pseudo[i].value);
//     alert(pseudo[i].value);
// }

var paragraphes = document.querySelectorAll("#test .paragraphe");

for(var i = 0; i < paragraphes.length; i++) {
    console.log(paragraphes[i].innerHTML);
    alert(paragraphes[i].innerHTML);
}