let a =10;
let b= a;

a=30;

console.log({a,b});

let juan = {nombre:'juan'};
let ana ={...juan};
ana.nombre='Ana';

console.log({juan,ana});

const cambiaNombre = ({...persona})=>{
persona.nombre = 'Tony';
return persona;
};

let peter = {nombre: 'peter'};
let tony= cambiaNombre(peter);

console.log(peter,tony);

// arreglos

const frutas =['manzana','pera','piña', ];

console.time('slice');
const otrasFrutas =frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 =[...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});

