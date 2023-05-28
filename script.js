function generateElement (tagName, attribute, ...childs) {
    const element = document.createElement(tagName);

    if(attribute){
    Object.keys(attribute).forEach(key => {
        element.setAttribute(key, attribute[key])
        })
    }

    if(childs){
        childs.forEach(child => {
            if('string' === typeof child){
                element.appendChild(document.createTextNode(child))
            } else{
            element.appendChild(child);
            }
        })
    }
    return element;  
}


const container = generateElement('div', {class: 'container'});

function genrateCart (name, age){

    const cart = generateElement(
        'div',{
            class: 'cart'
        },
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}` )); 



// const cart = document.createElement('div');
// cart.classList.add('cart');

// const nameEl = document.createElement('span');
// nameEl.innerText = `name: ${name}`;

// const ageEl = document.createElement('span');
// ageEl.innerText = `age: ${age}`;

// cart.appendChild(nameEl);
// cart.appendChild(ageEl);

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



document.body.appendChild(container);

