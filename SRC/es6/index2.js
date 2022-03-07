//objetos y como asignarlos 

//es5
let name = "oscar"; 
let age = 32; 
obj = {name:name, age:age}; 

//es6
obj2 = {name,age}; //toma llave y valor de los elementos 
console.log(obj2); 
console.log(obj); 

const names = [
    {name:"oscar",age: 32},
    {name: "moises", age: 30}
]
let listOfName = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name)); 

const listOfNames3 = (name,age, country) => {

}

const listOfNames4 = name => {

}

const square = num => num * num; //generando una función la cual recibe un valor que es numero y me retorna el numero

//promesas, asincronismo, antes ejecutar ciertos llamados en cascada callbackhell, con las promesas sabemos que algo va a pasar

const helloPromise = () => { //generar la promesa, creo una const, asignamos una función 
    return new Promise((resolve, reject)=>{ //arrow functions, retornar la promesa con dos parametros
        if (false){  // o resuelve o es rechazada, resolve y reject, establecer una validación
            resolve("hey"); //funciona a espera de una logica, la valido por medio de un if, true o false
        }else{
           reject("ups");  //acá cuando algo sale mal, en el reject
        }

    });
}
helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));