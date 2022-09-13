let personaje = {
    nombre:'pedro luis toro',
    codeName:'Ironman',
    vivo: false,
    edad:40,
    coords: {
        lat:34.034,
        lgt: -118.78

    },
    trajes: ['mark1', 'mark v','hulkbuster'],

};

console.log(personaje);

console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad', personaje['edad']);
console.log('latitud', personaje['coords']['lat']);
console.log('longitud', personaje['coords']['lgt']);
console.log('N°trajes', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length-1]);
const x = 'vivo';
console.log('esta vivo:',personaje[x]);
delete personaje.edad;
console.log(personaje);

personaje.casado= true;
console.log(personaje);
Object.freeze(personaje);
personaje.dinero=230000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje);

console.log ({ propiedades});

let valores= Object.values(personaje);
 console.log({valores});





