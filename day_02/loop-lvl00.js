/*
//1
var x = 0 ; 
while (x <= 10) 
{
    console.log(x) ;
    x ++ ;
} 
//
var x = 0 ;
do {
    x ++ ; 
    console.log(x) ; 
  } while (x < 10);
//2
for (var y = 10 ; y >= 0 ; y-- )
{
    console.log(y) ;
}
var y = 10 ; 
while (y >= 0) 
{
    console.log(y) ;
    y -- ;
} 
//
var y = 10 ;
do {
    console.log(y) ; 
    y -- ; 
  } while (y >= 0);

//3
var n = prompt("enter a number");
var a = 0 ;
for (var a = 0 ; a <= n ; a ++) 
{
    console.log(a) ; 
}
//4
for(var a = 1 ; a <= 7 ; a ++ )
{
    console.log("#".repeat(a)) ;
}

//5
for ( var a = 0 ; a <= 10 ; a++ )
{
 var b = a * a ;
 console.log(a + "x" + a + "=" + b )
}
//6
for (var a = 0 ; a <= 100 ; a ++ )
{
    if ( a % 2 == 0) 
    {
        console.log(a)
    }
}
//7
for (var a = 0 ; a <= 100 ; a ++ )
{
    if ( a % 2 !== 0 ) 
    {
        console.log(a)
    }
}

//8
for (var a = 0 ; a <= 100 ; a ++ )
{
    var toText = a.toString(); 
    var lastChar = toText.slice(-1); 
    var lastDigit = parseInt(lastChar);
    var nums = [1 , 3 , 6 , 9] ;
    if ( a == 2 || a ==5 || nums.includes(lastDigit)  ) 
    {
        console.log(a)
    }
}
*/
//9
var b = 0 ;
for (var a = 0 ; a <= 100 ; a ++ )
{
  b += a ;
}
console.log(b) ;