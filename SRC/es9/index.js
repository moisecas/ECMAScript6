//operador de reposo, extraer las propiedades de un objeto que no se ha construido 

const obj = {
    name: "moiso", 
    age: 30,
    country: "col",
    profesion: "ing sistemas"
};
let {country, ...all}= obj; //operador de reposo para separar los elementos, encapsulo 
console.log(all); //presentar todo lo del objeto, por ejemplo para traer ciertos datos 

//propagación 

const obj1 = { //creamos otro objeto
    name:"moises",
    age: 30, 
}
const obj2 = {
    ...obj1, //une los dos objetos ... obj es un operador estructuración de este nuevo objeto, basado en la composición de otro 
    profesion:"ing de sistemas",
    skill: "css,html, js, python, go, sql, mongo",  
}
console.log(obj2); 

//promiese finally cuando ha terminado el llamado, creamos una función que es una promesa para el ejemplo 

const tayson = () => {
    return new Promise((resolve,reject)=>{ //retornar la promesa, con su resolve y reject
        (true) // validar si es verdadero o no 
            ? resolve("hola")
            :reject(new Error("test error")) //promesa construida que nos va a permitir probarla 
    });
};

tayson()
    .then(response => console.log(response)) //
    .catch(error => console.log(error)) //manejo de errores     
    .finally(()=>console.log("finalizo")) //me va a permitir ejecutar un bloque de codigo según sea el caso. 

//agrupar 
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //constitución de manejo de fechas  rango valores, entre que valores y que cantidad, entre o - 9 y 4 digitos y así
const match = regexData.exec('2018-04-28'); //ejecutar, le pasamos una fecha
//exceder a datos particulares 
const year = match[1]; //accedo al primer grupo que estoy usando y así con los demas match 
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day); 

