//operador de reposo, extraer las propiedades de un objeto que no se ha construido 

const obj = {
    name: "moiso", 
    age: 30,
    country: "col",
    profesion: "ing sistemas"
};
let {country, ...all}= obj; 
console.log(all);  

//propagación 

const obj1 = {
    name:"moises",
    age: 30, 
}
const obj2 = {
    ...obj1, //une los dos objetos ...
    profesion:"ing de sistemas",
    skill: "css,html, js, python, go, sql, mongo",  
}
console.log(obj2); 

