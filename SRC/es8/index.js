//devolver la clave y los valores de una matriz 

const data = {
    frontend: "moiso",
    backend: "moiso",
    desing: "moiso", 
    message: "moiso es fullstack",
}
//transformar este objeto en matriz
const entries = Object.entries(data); 
console.log(entries); 
console.log(entries.length); //saber cuantos elementos hay 


//arreglo de strings
const data2 ={
    frontend: "moiso",
    backend: "moiso",
    desing: "moiso", 
    message: "moiso es fullstack",

}
const values = Object.values(data2); 
console.log(values) 
console.log(values.length)

//pading
const string = "hello "; 
console.log(string.padStart(7,"hi")) 
console.log(string.padEnd(12, "----")) //presentar una estructura de elementos 

//Async Await
const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(()=> resolve("hello world"), 3000)
        : reject(new Error("test error"))
    }) 

    
}; 

const helloAsync= async () => {
    const hello = await helloWorld();
    
    console.log(hello); 
}

helloAsync(); //llamado a la función

//otra forma Async Await 

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello); 
    }catch(error){
        console.log(error); 
    }
}
