/**
 * Show hidden popup on blur
 */

const refs = {
    input: document.querySelector('.js-open-popup-btn'),
    popUpWindow: document.querySelector('.js-popup'),
    popUpText: document.querySelector('#js-popup-text'),
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    refs.popUpWindow.style.display = 'block';
    refs.popUpText.textContent = refs.input.value;
    document.addEventListener('keydown', onPopUpClose);
}

function onPopUpClose(event) {
    if (event.code === 'Escape') {
        refs.popUpWindow.style.display = 'none';
        document.removeEventListener('keydown', onPopUpClose)
    }
}