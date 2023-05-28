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

        return cart;
    }

    function render (root, child){
        root.appendChild(child);
    }

const userData = [
    {name: 'midia', age: 22},
    {name: 'siawash', age: 25},
    {name: 'farzad', age: 16},
];

userData.forEach(data =>{
    container.appendChild(genrateCart(data.name, data.age));
})

render(document.body, container);


