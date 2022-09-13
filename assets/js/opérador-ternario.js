const dia = 4
const horaActual =12;

let horaApertura;
let mensaje; // esta abierto o esta cerrado

if (dia === 0 || dia ===6){

    console.log('Es fin de semana');
    horaApertura=9;
}else {
console.log('Dia de semana');
horaApertura=11;
}

console.log('apertura',horaApertura);

if (horaActual>=horaApertura){
    mensaje = 'esta abierto';
} else {
    mensaje= 'esta cerrado';
}

console.log(mensaje);

console.log(`Esta cerrado hoy ${dia}`);

console.log(`probando la concatenacion ${horaActual}`);


if ( horaActual>=horaApertura){
    mensaje='esta abierto';
}
else {
    mensaje =`esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log (mensaje);

//ternario
let horaActualDos=10;


horaApertura = ([0,6].includes(dia)) ? 9: 11;
mensaje = (horaActualDos>=horaApertura) ? 'Esta abierto' : `esta cerrado, abrimos a las ${horaApertura}`;
console.log(mensaje);

