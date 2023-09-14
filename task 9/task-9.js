/**
 * Create TODO list
 */

const refs = {
    input: document.querySelector('#add-input'),
    addNoteButton: document.querySelector('#add-btn'),
    orderedList: document.querySelector('ol'),   
}
console.log(refs.orderedList);
refs.addNoteButton.addEventListener('click', addNoteButtonClick);

function noteText(text) {
    return `<li>${text}</li>`;  
} 

function addNoteButtonClick() {
    const text = refs.input.value; 
    refs.orderedList.insertAdjacentHTML('afterbegin', noteText(text));
    refs.input.value = '';
}

