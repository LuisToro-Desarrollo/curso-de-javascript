

const elMayor=(a,b)=>{

return (a>b)? `el mayor es ${a}` : `El mayor es ${b}` ;

};

console.log (elMayor(10,15));


//se puede resumir mas

const elMayorDos=(a,b)=>(a>b)? `el mayor es ${a}` : `El mayor es ${b}` ;
    
    console.log (elMayor(40,80));

    // otro ejercicio

    const tieneMembresia = ( miembro )=>{

        return (miembro) ? 'Dolares 10': 'Dolares 20'; 

    };

    console.log(tieneMembresia(false));

    // mas resumido

    const tieneMembresiados =(miembro)=>(miembro)? 'Paga 20' : 'paga 50'; 

    console.log(tieneMembresiados(true));


    const amigo = false; 

    const amigosArr = [
    'peter',
    'tony',
    'Ramon',
    (amigo) ? 'Thor': 'Loki'
    ]; 
console.log(amigosArr);

// otro uso del operador ternario

const nota =100; // A+, A, B+

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';



console.log(nota,grado);










