import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';


// //scope 1
// const anotherid = "123abfda"

// function makeCarPartid(id){
// //scope 2

// function anotherFunction(){
//     //scope 3 look in scope then go up the chain
//     const someId="adf";
//     console.log(id,anotherid,someId)
//     }
// }

// makeCarPartid('xdsafaf');
// ///console.log(id);

// function makeCarParId(id){
//     const theId = `CAR_PART_${id}`
//     return theId;
// }

// function makeCarParId(id){
//     const theId = `CAR_PART_${id}`
//     console.log(`create ${theId}`)
//     return function(){
//         console.log(theId);
//     }
// }

// function makeCarParId(id){
//     const theId = `CAR_PART_${id}`
//     console.log(`create ${theId}`)
//     return function(name){
//         return `${theId}_${name.toUpperCase()}`
//     }
// }


//arrow function

function makeCarParId(id){
    const theId = `CAR_PART_${id}`
    console.log(`create ${theId}`)
    return (name) => `${theId}_${name.toUpperCase()}`
    
}
const carPartId = makeCarParId('affeaf');
console.log(carPartId("LEFT DOOR") );
console.log(carPartId("RIGHT DOOR") );

const anothercarPartId = makeCarParId('faeafasf');
console.log(anothercarPartId("LEFT DOOR") );
console.log(anothercarPartId("RIGHT DOOR") );