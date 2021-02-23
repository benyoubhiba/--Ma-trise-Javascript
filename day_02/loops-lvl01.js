/*
//1
var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var result="";
for( var i=0; i < Math.floor(Math.random() * characters.length ); i++ )
{
        result += characters[Math.floor(Math.random() * characters.length)];
}
console.log(result);
//2
var color = [ ] ;
for ( var i = 0 ; i <= 3; i ++ )
{
        for ( var j = 0 ;  j < 3   ; j ++ ) 
        {
                var codes = Math.floor(Math.random() * 255 ) ; 
                color [j] = codes ; 
        }
}
console.log(`RGB(${color })`) ;
*/