/**
 * Create email field validation after pressing Enter
 * Prevent closing window
 */
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

const refs = {
    mailInput: document.querySelector('#email-input'),
    errorText : document.querySelector('#error-text')
}

refs.mailInput.addEventListener('keydown', mailInputHandler)

function isEmail(email) {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegex.test(email.toLowerCase());

}

function mailInputHandler(event) {
    if (event.code === 'Enter') {
        if (isEmail(event.target.value)) {
            refs.errorText.style.display = 'none';
        } else {
            refs.errorText.style.display = 'block';  
        }
    }
}



