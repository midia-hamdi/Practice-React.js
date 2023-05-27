function genarateElement (tagName, attribute) {
    const element = document.createElement(tagName);

    if(attribute){
    Object.keys(attribute).forEach(key => {
        element.setAttribute(key, attribute[key])
        })
    }
    return element;  
}


const container = genarateElement('div', {class: 'container'});

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





try {
    console.loge("aaaaaaaaaaaaaaaaaaaahtfryexhgfcdxhfcrye");
    
} catch (error) {
    console.error("error thrown")
}