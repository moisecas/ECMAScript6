//parameotros por defecto 

function newFunction(name,age, country){
    var name = name || "oscar"
    var age = age || 32
    var country = country || "col"
    console.log(name,age,country)
}

//es6

function newFunction2(name="osar", age=32, country="mx"){
    console.log(name,age,country); 
}; 

newFunction2(); 
newFunction2("tayson", "33", "co"); 

//se instala un paquete, code runner, para trabajar de forma mas ordenada, bloques de cod en nuestro proyecto

//template, uniones mas amigables 
let hello = "hello";
let world = "world"; 
let epicPhrase =  `${hello} ${world}`; //alt + 96 para ``
console.log(epicPhrase); 