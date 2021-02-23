var monSet = new Set();
const monSet = new Set([]);
for(var i=0;i<=10;i++)
{
    monSet.add(i);
}
console.log(monSet)
monSet.delete(5);
monSet.has(5); 
const nombres = [2,3,4,4,2,2,2,4,4,5,5,6,6,7,5,32,3,4,5];
console.log([...new Set(nombres)]);
//Exercises:Level 2
//1
let a = new Set([1,2,3]);
let b = new Set([4,6,2]);
let union = new Set([...a, ...b]);
//2
let j = new Set([100,9,3]);
let d = new Set([17,9,2]);
let intersection = new Set(
    [...j].filter(x => d.has(x)));
//3
var x=3
var y=8

with (Math) {
 z= x+y
}
//Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const  table=[ "e","pi" , "gravity"," humanBodyTemp"," waterBoilingTemp"]

var d;
var i=0;
for(i=0;i<table.length;i++)
{
    d=table[i]+"="+constants[i];
}
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const hj=[]
var n;
var i=0;
for(i=0;i<hj.length;i++)
{
    n=table[i]+"="+constants[i];
}


//Exercises: Level 2
//1


//2


//Exercises: Level 1
function isString(inputText){
    if(typeof inputText === 'string' || inputText instanceof String){
       
        return true;    
    }else{
    
        return false;
    }
}

var textOne = "first_name";
var textTwo = ("first-name");
var notString =("1first_name");
var textfor=("firstname");
console.log("textOne variable is String > "+isString(textOne));
console.log("textTwo variable is String > "+isString(textTwo));
console.log("notString variable is String > "+isString(notString));
console.log("textfor variable is String > "+isString(textfor));