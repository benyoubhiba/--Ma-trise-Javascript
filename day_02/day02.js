/*
//arrays lvl00 
//1
var x = [];
//2
var ar = [1, 2, 3, 4, 5];
//3 
console.log(ar.length);
//4
var middle = ar[Math.round((ar.length - 1) / 2)];
console.log(middle);
var last = ar[ar.length - 1];
console.log(last);
//5
var mixedDataTypes = [1, true, "hey", null, undefined];
console.log(mixedDataTypes.length);
//6
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0]);
console.log(itCompanies[Math.round((itCompanies.length - 1) / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
//10
console.log("-------------------");
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//11 
console.log("-------------------");
for (var y = 0; y < 6; y++) {
    console.log(itCompanies[y].toUpperCase());
}
//12 Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT.
console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + " et " + itCompanies[6] + " sont de grandes entreprises d'IT.");
//13 
var key = prompt("enter the company name");
if (itCompanies.includes(key)) {
    console.log(key)
} else {
    console.log("société introuvable");
}
*/
//14
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
var T = [];
//choice of element
for (var i = 0; i <= itCompanies.length - 1; i++) 
{
    var element = String(itCompanies[i]);
    //search the element
    for (var j = 0; j <= element.length; j++) 
    {
        //found one match
        if ( element.indexOf("o") > 0)
        {
            var element1 = element.replace("o" , "") ;
            //second match
            if (element1.indexOf("o") > 0) 
            {
                T[i] = itCompanies[i] ;
            }

        }

    }
}
console.log(`${itCompanies} \n${itCompanies.sort()} \n${itCompanies.reverse()}`) ;
/*
//17
console.log(itCompanies.slice(0 , 3) + "\n") ;
//18 
console.log(itCompanies.slice(3 , 6) + "\n") ;
//19
for( var i = 0; i < itCompanies.length; i++)
{ 
    if ( i = ((itCompanies.length)/2))
    { 
       itCompanies.splice(i, 1) ;
       
       //console.log(itCompanies) ;
    }
}
//20
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"] ;
const firstElement = itCompanies.shift();
//console.log(itCompanies);
//22
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"] ;
const lastElement = itCompanies.pop();
console.log(itCompanies);
//
*/


