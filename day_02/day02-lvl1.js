/*
//1
let countries = require('./countries.js');
let webTechs = require('./web_techs.js');
console.table(countries);
console.log("\n");
console.table(webTechs);
//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.' ;
let words = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
console.log(words)
console.log(words.length)
var words1 = words.split(" ") ;
console.log(words1) ;
var T = [words1] ;
console.log(T) ;
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] ;
var meat = shoppingCart.unshift('Meat') ;
//console.log(shoppingCart) ;
var Sugar = shoppingCart.push("Sugar") ; 
//console.log(shoppingCart)
//4
const countries = ['USA','Canada','Denmark','Algeria','Tunisia','Germany','China','Morocco','Ireland','Japan','France']
if (countries.indexOf('MOROCCO') < 0 )
 {
    var morocco = countries.push('MOROCCO') ; 
    console.log(countries) ;
}
else
{
    console.log(countries) ;
}
//5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'Node',
    'Bootstrap'
  ]
  if (webTechs.indexOf('SASS') < 0 )
{
    var morocco = webTechs.push('SASS') ; 
    console.log(webTechs) ;
}
else
{
    console.log("Sass est un préprocesseur CSS") ;
}
*/
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'VueJs', 'VueX'] ;
const backEnd = ['Node','Express', 'MongoDB'] ;
console.log(frontEnd.concat(backEnd)) ; 
