import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

function makeCarPrice(){
  //arguments object old way
    console.log(arguments)
    console.log(arguments[0])
    console.log("iterating over arguments")
    Array.from(arguments).forEach((a)=>console.log(a))

   const total = Array.from(arguments).reduce((prev, next)=> prev+next)
  
    console.log("total "+total)

}

makeCarPrice(1,2,3);
//rest parameter
//at the end of list
function makeCarPriceRest(number,...params){
console.log(params)
const total =params.reduce((prev, next)=>prev+next)
console.log(`total ${total}`)
}

makeCarPriceRest(1,2,3);