import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

function makeCar(name='Porche!!!!'){ // default value
   // name = name || 'Porche'

    // if(!name){
    //     name = 'Ferarri'
    // }
    console.log(`Making car: ${name.toUpperCase()}`)
}
makeCar('Porsche');

makeCar("")
makeCar()