const container = document.createElement('div');
container.classList.add('container');

function generateCart (name, age){
const cart = document.createElement('div');
cart.classList.add('cart');

const nameEl = document.createElement('span');
nameEl.innerText = `name: ${name}`;

const ageEl = document.createElement('span');
ageEl.innerText = `age: ${age}`;

cart.appendChild(nameEl);
cart.appendChild(ageEl);

return cart;
}

const userData = [
    {name: 'midia', age: 22},
    {name: 'siawash', age: 25},
    {name: 'farzad', age: 16},
];

userData.forEach(data =>{
    container.appendChild(generateCart(data.name, data.age));
})



document.body.appendChild(container);