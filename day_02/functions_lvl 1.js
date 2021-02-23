/*
//1
var name = x(prompt("enter ur name")) ;
function x(name)
{
    console.log(name) 
}
*/
//2
function fullname(firstname , lastname)
{
console.log(firstname + " " + lastname)
}
fullname(prompt("enter firstname") , prompt("enter lastname")) ;
//3 
function addnumbers(a , b)
{
var c = parseInt(a) + parseInt(b) ;
console.log(c)
}
addnumbers(prompt("enter a") , prompt("enter b")) ;
//4
function areaOfRectangle(longeur , largeur)
{
    var aor = parseInt(longeur) * parseInt(largeur) ;
    console.log(aor) ;
}
areaOfRectangle(prompt("enter longeur") , prompt("enter largeur")) ;
//5
function perimeterOfRectangle(longeur , largeur)
{
    var perimeter = 2 * (parseInt(longeur) + parseInt(largeur))
    console.log(perimeter)
}
perimeterOfRectangle(prompt("enter longeur") , prompt("enter largeur")) 
//6
function areaOfCircle(rayon)
{
    var area = Math.PI * parseInt(rayon) * parseInt(rayon) 
    console.log(area)
}
areaOfCircle(prompt("enter rayon")) 
//7
function CtoF(C)
{
    var F = (parseInt(C) * 9/5) + 32 ;
    console.log(F)
}
CtoF(prompt("enter C ")) 
//8
function checkSeason(month)
{
    var Automne = ["Septembre" , "Octobre" , "Novembre"]
    if (Automne.includes(month)) 
    {
        console.log("le saison est l'automne " )
    }
    var Hiver = ["Decembre" , "Janvier" , "Février"]
    if (Hiver.includes(month)) 
    {
        console.log("le saison est l'hiveré " )
    }
    var Printemps = ["Mars" , "Avril" , "Mai"]
    if (Printemps.includes(month)) 
    {
        console.log("le saison est le Printemps " )
    }
    var Été = ["Juin" , "Juillet" , "Août"]
    if (Été.includes(month)) 
    {
        console.log("le saison est l'été " )
    }
}
checkSeason(prompt("enter the month"))
//9
function Compare(num1 , num2 , num3)
{
    if ( num1 > num2 && num1 > num3 )        
    {
        console.log(num1 + " is the biggest number ")
    }
    if ( num2 > num1 && num2 > num3)
    {
        console.log(num2 + " is the biggest number")
    }
    if ( num3 > num1 && num3 > num2)
    {
        console.log(num3 + " is the biggest number")
    }
}
Compare(prompt("1") ,prompt("2") ,prompt("3") , )
//10 
