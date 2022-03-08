let array = [1,2,3,[1,2,3,[1,2,3]]]; 
console.log(array.flat(2))

let array1 = [1,2,3,4,5];
console.log(array1.flatMap (value => [value,value*2])) //flat recibe como argumento

//otro de los elementos, eliminar los espacios en blanco de un string
let hello = "hola mundo";
console.log(hello.trimStart()); 

let hello1 ="hola a todos y todas"; 
console.log(hello.trimEnd());


//transformar llave valor en un objeto, de objeto o arreglo o al revés
let entries = [["name","moiso"], ["age","30"]];
console.log(Object.fromEntries(entries));  

//objeto de tipo symbol 
let mySynbol = "my symbol"; 
let symbol=Symbol(mySynbol);
console.log(symbol.description); 
