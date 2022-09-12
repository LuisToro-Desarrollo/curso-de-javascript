const regreseTroo =()=>{
    console.log('regresa True');
return true;
}; 

const regreseFalse = ()=>{
console.log('Regresa falso');
return false;
};
console.log(!regreseFalse());
console.log(!regreseTroo());

console.log(true && true);
console.log(regreseTroo() && regreseFalse());

console.log(regreseFalse() && regreseFalse());

console.log('--------------------')

console.log(regreseFalse() || regreseTroo());

console.log(regreseTroo() || regreseFalse());


