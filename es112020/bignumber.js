// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991); //trabajar con valores grandes sin neceisdad de la n al final del numero

console.log(aBigNumber); //presentamos el numero
console.log(anotherBigNumber);

// 🤝 Promise All Settled, nos devuelve una promesa que se resuelve despues de que todas las promesas dadas se hayan cumplido o rechazado  

const promise1 = new Promise((resolve,reject) => reject("reject")); //esto es una promesa que es igual a otra promesa 
const promise2 = new Promise((resolve,reject) => resolve("resolve")); //repetimos el proceso con diferentes valores 
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3]) //le pasamos en un arreglo las promesas que vamos a utilizar 
    .then(response => console.log(response));//.then para poder regresar, conocer la forma que nos va a representar el elemento
    //


// 🌎 Global This, tiene el valor global, similar al objeto global, acceso al global 

console.log(window); //no definido 
console.log(globalThis); //acceso al elemento

// 🔍 Nuevo operador lógico: null operator, operador logico que nos devuelve operado del lado derecho 

const fooo = null ?? 'default string'; //se usa ?? para usar el operador 
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining, trabajar diferentes niveles, arreglos y acceder a estos elementos 

const user = {};
console.log(user?.profile?.email); //simbolo de pregunta, vamos a leer este nivel aquí pero no rompe la ejecución 

if(user?.profile?.email) { //si tenemos un valor que responda si no que nos diga que no fue posible
    console.log('email')
} else{
    console.log('fail')
}
