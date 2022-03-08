//dinamic import, importación de un elemento de forma dinamica, piezas de código 

const button = document.getElementById("btn")//boton escuchando que evento va a pasar ahí, btn es el id que le asigne en html

//como traer la función de file.js? de la siguiente forma 

button.addEventListener("click", async function(){
    const module = await import("./file.js"); 
    module.hello(); 

});