let juegos = ['zelda','Mario','Metrid','Crohno'];
console.log('largo',juegos.length);

let primero =juegos[0];
console.log(primero);

let ultimo= juegos[juegos.length-1];
console.log(ultimo);

juegos.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice,arr);

});

let nuevoLargo=juegos.push('F-zero');
console.log(nuevoLargo, juegos);

juegos.unshift('principe persia');
console.log(nuevoLargo, juegos);

let juegoBorrado=juegos.pop();
console.log({juegoBorrado, juegos});

let pos= 1;
let juegosBorrados=juegos.splice(pos,2);
console.log({juegosBorrados,juegos});
let metridIndex= juegos.indexOf('Metrid');
console.log({metridIndex, juegos});


