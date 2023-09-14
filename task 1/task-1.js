/**
 * We have a list of elements on html page
 * 1. Print a text content of elements
 * 2. Add element 'Coke'
 * 3. Color text in list in red
 */


const refs = {
    elements: document.querySelectorAll('li'),
    ul : document.querySelector('ul'),

}

refs.elements.forEach(el => {
    console.log(el.textContent);
})




// const newEl = '<li>Coke</li>'

// refs.ul.insertAdjacentHTML('beforeend', newEl);

const cokeNode = document.createElement('li');
cokeNode.textContent = 'Coke';
refs.ul.append(cokeNode);

document.querySelectorAll('li').forEach(el => el.style.color = 'red')