const dia = 4
const horaActual =10;

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


