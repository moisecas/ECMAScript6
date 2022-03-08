
// 🧯 Replace,replace all

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."; //buscar info y reemplazarla
const replacedString = string.replace("JavaScript", "Python"); //primer valor del string y reemplazarlo por otro
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python"); //reemplaza todo javascrit por python, todas las coincidencias
console.log(replacedString2); //nos muestra python en vez de javascript Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados (no puede ser accedido)
class Message { 
    #show(val){ // Con el # convertimos al método en privado, recibe un valor. 
        console.log(val);
    };
};

const message = new Message(); //crear la instancia de esta clase 
message.show('tayson'); //mensaje que queremos  

//  👽 Promise Any, cuyo argumento es un array de promesas, capturando la primera promesa que sea resuelta 

const promise1 = new Promise((resolve, reject) => reject("1")); //vamos a tener la logica que vamos a trabajar
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]) //le pasamos en un arreglo nuestras promesas 
    .then(response => console.log(response)); //para ver que tiene ese response, el primero que resuelva retornalo 


//  🦴 WeakRef(element); le permite mantener una referencia debil a otro objeto sin evitar que este objeto sea recogido por el garbage collector

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    {...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);