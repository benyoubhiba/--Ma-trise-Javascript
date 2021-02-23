//web Storage
//1
localStorage.setItem("hiba","benyoub",20);
//2
var objet={name:hiba,prenom:benyoub,age:20}
localStorage.setItem(objet);
//3
var url="https://restcountries.eu/rest/v2/all";
fetch(url)
.then(function(responce)
{
    console.log(responce)
})
.catch(function(error){
    console.error(error)
})
console.log("hello")
//Exercises: Level 2

//LEVEL 3
function init() {
    var nom = "Mozilla"; 
    function afficheNom() { 
      console.log(nom); 
    }
    afficheNom();
  };
  init();
