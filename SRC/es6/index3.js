//clases, poo, herencia de js 

//clase con un constructor 
class calculator { //creamos la clase con class
    constructor(){ //constructor metodo para iniciar nuestra clase, asignar variables dentro de global
        this.valueA=0;
        this. valueB =0;

    }
    sum(valueA,valueB){ //metodo que vamos a usar, en este caso sum, dos valores para este caso
        this.valueA= valueA; //lo igualamos al valor que estamos recibiendo 
        this.valueB=valueB; 
        return this.valueA+this.valueB; //retornar lo que sería esa suma 
    }
}
const calc = new calculator(); //para usarlo genero una const
console.log(calc.sum(2,2)); //por acá le envío lo que quiero sumar, muestro, uso la variable, le doy los # a sumar. 

import {hello} from './modulo'; //import nombreFuncion from de donde './' 

hello(); //se invoca 

//generators función especial que retorna unos valores según el algoritmo 
function*helloWorld(){ //sintaxis *
    if(true){ //algoritmo que tengo preparado, en este caso validamos si es true
        yield 'hello, '; //yield llamado
    }
    if (true){
        yield "world"; 
    }
}

const generatorHello = helloWorld(); //para ejecutarlo genero una const
console.log(generatorHello.next().value); //next ejecutar la primer logica
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
