var tab =new Array("maroc","france","algerie");
console .table (tab);
var obj={};
obj.prop=[0,1,2]
console.table(obj);
console.group();
//level2
console.assert(10 > 2 * 10 );
console.warn("this is a warning!");
console.error("you made a mistake");
//Classes
//Exercises Level 1:
class animal {   constructor(name,age,color,legs){
    this .name=name;
    this .age=age;
    this .color=color;
    this. legs=legs; }
}
class dog extends animal{constructor(jiko)
{super(jiko);}}
class  cat extends animal{constructor(jijo)
    {super(jijo);}}
//Exercises Level 2

//Exercises Level 1
//1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const myskills=JSON.stringify(skills);
const myage=JSON.stringify(age);
const maried=JSON.stringify( isMarried);
const stady=JSON.stringify( student);
//LEVEL 2
function replacer(key,value){
    console.log(typeof value);
    if (key==='age'){ return undefined}
return value;}
const sh=JSON.stringify(student,replacer);
//LEVEL3
//1
const myobj = JSON.parse(txt);
//2

