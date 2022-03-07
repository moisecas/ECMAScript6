//clases, poo, herencia de js 

//clase con un constructor 
class calculator {
    constructor(){
        this.valueA=0;
        this. valueB =0;

    }
    sum(valueA,valueB){
        this.valueA= valueA;
        this.valueB=valueB; 
        return this.valueA+this.valueB;
    }
}
const calc = new calculator(); 
console.log(calc.sum(2,2)); 

import {hello} from './modulo'; //import nombreFuncion from de donde './' 

hello(); 
