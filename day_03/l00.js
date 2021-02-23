//1


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Max', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3},
  { product: 'mango', price: 6},
  { product: 'potato', price: ' '},
  { product: 'avocado', price: 8},
  { product: 'coffee', price: 10},
  { product: 'tea', price: ''},
]
//2
function iterate(items) {
    console.log(items);
  }
countries.forEach(iterate);
names.forEach(iterate);
numbers.forEach(iterate);
//6
var newtab = countries.map(function(items) { return items.toUpperCase(); });
console.log(newtab);
//7
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

var ville=pays.map(function(items) { return items.length; });
console.log(ville);
//8
var num=[4,9,25,35 ];
var racines =num.map(Math.sqrt);
console.log(racines);
//9
var nom = names.map(function(items) { return items.toLowerCase(); });
console.log(nom);
//10

var result=['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'].filter( c=>c.includes("land"));
console.log(result);
//11
var re= countries.filter(countries=> countries.length==6);
console.log(re);
//12
var txt =['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'].filter(c=>c.includes("E"));
console.log(txt);
/13 l3ks******
var words =["hhh","azerty","wxcvbn","Em","EE","hhEk"]
const result = words.filter(word => word.indexOf("E"));
console.log(result);
//14
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: ' ' },
]
console.log(products.filter(produ=>produ.price!=" "))
//15
const numbers = [1, 2, 3, 4];
const reducer = (a , b) => a + b;
console.log(numbers.reduce(reducer));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));
//16
 /* 17:La méthode some() teste si certains éléments du tableau typé remplissent une condition décrite par la fonction de test donnée.
La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument.*/
//18
function supérieurÀ10(élément, index, array) {
  return élément > 10;
}
new Uint8Array(['Max', 'Mathias', 'Elias', 'Brook']).some(supérieurÀ10);
//19
function estAssezGrand(element, index, array) {
  return element =="land";
}
['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'].every(estAssezGrand);
/* 20:
La méthode findIndex() renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction.
La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument.
*/
//21
function estPremier(element, index, array) {
  let début = 6;
  while (début <= Math.sqrt(element)) {
      if (element % début ++ < 5) return false;
  }
  return (element > 5);
}

console.log(countries .find(estPremier) );
console.log(countries .find(estPremier) );
//22
const found = countries.findIndex(element => element.length==6);
//23
const isLargeNumber = (element) => element =="NORWAY";
console.log(countries.findIndex(isLargeNumber));
//24
const isLarNumber = (element) => element =="russia";
console.log(countries.findIndex(isLarNumber));
