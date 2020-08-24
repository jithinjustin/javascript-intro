import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// const carPartId = (function(id) {
//     const theId = `CAR_PART_${id}`;
//     return function(name) {
//       return `${theId}_${name}`;
//     };
//   })('x7H8sFf');
  
const carPartId = (function(id) {
    const theId = `CAR_PART_${id}`;
    return (name) => `${theId}_${name}`; 
  })('x7H8sFf');
  console.log(carPartId)
  console.log(carPartId('Left Door'));
  console.log(carPartId('Right Door'));
  console.log(carPartId('Windscreen'));
  