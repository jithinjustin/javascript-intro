import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

console.log(makeCar)
console.log(shortHandArrow)
//1 function declaration
function makeCar(){
    console.log('making car')
}

makeCar()

//2 function expression
const carFunctionExpresson = function (){}
console.log(carFunctionExpresson.name)

//3 Arrow functions

const carArrowFunctions = ()=>{
    console.log(carArrowFunctions.name)
}

carArrowFunctions();
// this behaves differently in a funciton declaration
// and a arrow function

//makearrow shorthand

//implicit vs explicit return

const shortHandArrow = ()=> console.log(shortHandArrow.name)

shortHandArrow();