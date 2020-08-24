import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';


// function carPart(name, fn){

//     fn();


// }

// carPart("hello",function(){
//     console.log("I am callback");
// })
  

function carPartId(name, fn) {
    const theId = `CAR_PART_x8zOsl`;
    return fn(`${theId}_${name}`);
  }
  
  const carPart = carPartId('Left Door', function(id) {
    return `Car Part ID: ${id}`;
  });
  
  console.log(carPart);