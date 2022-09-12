const tony = {
    nombre: 'Tony Stack',
    CodeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    
};

/*const imprimePropiedades = (personaje ) => {
    console.log(personaje.nombre);
    console.log(personaje.CodeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);

}

imprimePropiedades( tony );

**/

const imprimePropiedades = ({nombre,CodeName,vivo,edad,trajes }) => {
    console.log({nombre});
    console.log({CodeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );

console.log('mi nombre');

let edad =prompt ('por favor indique su edad','ingrese su edad');

if (edad<18) {
    alert('es menor de edad');
    {
        location.href ="http://www.pagina1.com";
        }
}

else {
    alert('es mayor de edad');
}

//ejemplo con if ternario

 edad <18 ? (console.log('es menor de edad'
 )): (console.log('es mayor de edad'));



