let heroes = [
    'Batman',
    'Robin',
    'Super',
    'Marav'
    
];

let i = 0;
for (i==0;i<heroes.length;i++){
    console.log(heroes[i]);
}

// otros tipos de for 

console.warn('For in');

for (let i in heroes){

console.log(heroes[i]);

}

// for of: para buscar referencias a valores de objeto de forma mas sencilla

console.warn('for of');

for( let heroe of heroes){ // se acostubra a colocar el nombre del arreglo
    console.log(heroe);
}

console.warn('propio');
// ejerciio propio 
let bueno= false;

let estudiante = [
'pedro',
'juan',
'lorena',
'michel',
'yesion',
(bueno)? 'javer': 'nairo'

];

for(let i in estudiante){
    console.log(estudiante[i]);
}


console.warn('propio for of');

for(let estudiant of estudiante ){
    console.log(estudiant);
}