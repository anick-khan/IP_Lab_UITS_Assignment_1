let x = parseInt(prompt("x = "));
let y = parseInt(prompt("y = "));
let choice = parseInt(prompt("choice = "));


switch (choice){

case 1:
    function add ( x,y){
    return x+y;
    }
    document.write( add(x,y))
break;

case 2:
    function sub ( x,y){
        return x-y;
    }
    document.write( sub(x,y))
break;

case 3:
    function multi ( x,y){
        return x*y;
    }
    document.write( multi(x,y))
break;

case 4:
    function div ( x,y){
        return x/y;
    }
    document.write( div(x,y))
break;
}