const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
/*
//----------------------------------------------------------------------------
//1 
var t = 0;
var y;
for (var items in users) {

  if (t < users[items].skills.length) {
    t += users[items].skills.length;
    y = users[items];

  }

}
console.log(y)
//2
var t = 0;
var y;
for (var items in users) {

  if (users[items].points < 50) {
    t += users[items].points.length;
    Y = console.log(g)
}
}
console.log(y)
//2-------------------------- 

//3
var y;
for (var items in users) {
  var t = "";
  if (users[items].skills.includes("MongoDB" , "Express", "React" , "Node" ) )
   {
    console.log(items) ;
   }
}
*/
//4
users.anass = {
  email: 'aouissianass@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 22,
  isLoggedIn: false,
  points: 100000000000000
}
//console.log(users)
//5-------------------//6
var u = new Array() ;
for(items in users)
{
var myArray = Object.values(users[items]);
u[items] += myArray ;
}
console.log(u) ;

