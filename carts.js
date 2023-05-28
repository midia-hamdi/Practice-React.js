import generateElement from "./generateElement.js";

const container = generateElement('div', {class: 'container'});

function genrateCart (name, age){

    const cart = generateElement(
        'div',{
            class: 'cart'
        },
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}` ));     

        return cart;
    }



const userData = [
    {name: 'midia', age: 22},
    {name: 'siawash', age: 25},
    {name: 'farzad', age: 16},
];

userData.forEach(data =>{
    container.appendChild(genrateCart(data.name, data.age));
})

export default container;