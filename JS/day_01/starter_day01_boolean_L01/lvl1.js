/*
//1-Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier les différents data types.
var firstName = "Anass" ;
console.log(typeof firstName) ;
var lastName = "Aouissi" ;
console.log(typeof lastName) ;
var country = "Morocco" ;
console.log(typeof country) ;
var city = "Oujda" ;
console.log(typeof city) ;
var age = 22 ; 
console.log(typeof age ) ;
var isMarried = false ; 
console.log(typeof isMarried) ;
var year = 1998 ; 
console.log(typeof year) ;
//2-Vérifiez si le type '10' est égal à 10
console.log('10'===10) ;

//3-
console.log(parseInt('9.8')=== 10) ;
//4-La valeur booléenne est vraie ou fausse.
//Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).
//Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).
var A = true ;
var B = false ;
console.log('1998'===1998) ;
console.log(B) ; 

//5-Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log(4 > 3) ;
console.log(4 >= 3) ;
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('Python'.length != 'jargon'.length) ;
//6-Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log(4 > 3 && 10 < 12 );
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!("dragon".search("on") && "python" .search("on")) ) ;
*/
//7-Utilisez l'objet Date pour effectuer les activités suivantes
var T = new Date() ;
console.log(T.getFullYear()) ;
console.log(T.getMonth()) ;
console.log(T) ;
console.log(T.getDay()) ;
console.log(T.getHours()) ;
console.log(T.getMinutes()) ;
console.log(T.getTime(2021, 11, 2))*0,001 ;