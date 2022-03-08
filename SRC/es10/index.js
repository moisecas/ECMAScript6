let array = [1,2,3,[1,2,3,[1,2,3]]]; 
console.log(array.flat(2))//flat recibe como argumento la profundidadm, podemos pasarle cuantos valores sea el caso

let array1 = [1,2,3,4,5];
console.log(array1.flatMap (value => [value,value*2])) //mapear cada elemento, flapmap metodo, retornar nuestro valor y valor x2

//otro de los elementos, eliminar los espacios en blanco de un string
let hello = "hola mundo";
console.log(hello.trimStart()); //nos va a permitir el resultado que tenemos 

let hello1 ="hola a todos y todas"; 
console.log(hello.trimEnd()); //eliminar las opciones al final del texto


//transformar llave valor en un objeto, de objeto o arreglo o al revés
let entries = [["name","moiso"], ["age","30"]];
console.log(Object.fromEntries(entries));  //estructurando un arreglo que  queremos convertirlo en un arreglo 

//objeto de tipo symbol 
let mySymbol = "my symbol"; 
let symbol=Symbol(mySymbol);//le pasamos la descripción que tenemos mySynbol
console.log(symbol.description); //acceder a la descripción por medio de description
