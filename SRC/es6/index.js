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

let lorem2 = `otra frase`;
console.log(lorem2); 

let person = {
    'name': 'moiso',
    'age': 30,
    'country': 'co'
}

console.log(person.name, person.age); 

let {name, age} = person; 
console.log(name,age); 

//operador 

let team1 = ['moiso','tayson','chechito']; //let se usa para ser valido solo en el bloque de código
let team2 = ['aleja', 'monica', 'daniela']; //usamos var para variables de forma global 

let education = ['david', ...team1, ...team2] //crear un nuevo elemento con todos los arreglos 

console.log(education); 

//se usa const para asignar variables con valores fijas que no cambian su valor