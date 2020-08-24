import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';


// function makeCarPrice(...params){
// const total = params.reduce((prev,next)=> prev+next)

// console.log(`total ${total}`);
// return total;
// }

//make a arrow function
// const makeCarPrice =(...params)=>{
//     const total = params.reduce((prev,next)=> prev+next)
    
//     console.log(`total ${total}`);
//     return total;
//     }


//refactor code

const makeCarPrice =(...params)=> params.reduce((prev,next)=> prev+next)

const totalPrice=makeCarPrice(1,2,3,4,5,6,7)
console.log(`new total ${totalPrice}`)
//call function from string literal
console.log(`${makeCarPrice(1,2,3)}`)