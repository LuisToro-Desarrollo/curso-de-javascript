function saludar () {
 console.log ('hola mundo');
};

saludar();
saludar();

function saludar2(nombre){
console.log('Hola' + nombre);
return 1;
}
let retornoSaludar=saludar2('karlos');
console.log(retornoSaludar);
saludar2('maria');
saludar2('ferde');

const saludarFlecha = () =>{
    console.log('hola flecha');
}

saludarFlecha();
saludarFlecha();
saludarFlecha();
const saludarFlecha2=(nombre)=>{
console.log('hola' + nombre)
};
saludarFlecha2('carlos');

function sumar(a,b){
   return a+b ;
}
console.log(sumar(1,3));

const sumar2=(a,b)=>{
return a+b;
}
console.log(sumar2(20,10));

// si solo es el return en la funcion
const sumar3=(a,b)=>a+b;
console.log(sumar3(12,7));

function getAleatorio(){
return Math.random();
};
console.log( getAleatorio() );

//trasformar a funcion de flechas

const getAleatorio2=()=>Math.random();
console.log(getAleatorio2());






