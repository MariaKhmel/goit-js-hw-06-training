// **
//  * Crete page with images in modal window
//  * User can change image with button < - and ->
//  * /
//refs

const refs = {
    modalWindow: document.querySelector('#modal-window'),
    images: document.querySelectorAll('.promo-image'),
    closeButton: document.querySelector('.close'),
    modalContent : document.querySelector('#modal-content'),
}

// vars
const imagesArray = [];

///eventlisteners
refs.images.forEach(image => {
    image.addEventListener('click', modalOpener);
    imagesArray.push(image.dataset.source);
})


console.log(imagesArray);
refs.closeButton.addEventListener('click', modalClose);
document.addEventListener('keydown', modalCloseOnEscape);
document.addEventListener('keydown', changeImagesWithArrows)

///modalHandlers
function modalOpener(e) {
    refs.modalWindow.style.display = 'block';
    refs.modalContent.src = this.dataset.source;
}

function modalClose(e) {
    refs.modalWindow.style.display = 'none';
}

function modalCloseOnEscape (e) {
    if (e.code === 'Escape') {
    refs.modalWindow.style.display = 'none';
  }
}

///changeButtonHandler

function changeImagesWithArrows(e) {
    let newIndex;
    console.log(refs.modalContent.src);
    const currentIndex = imagesArray.indexOf(refs.modalContent.src);
    console.log(currentIndex);
    if (e.code === 'ArrowLeft') {
        newIndex = leftClick(currentIndex);
    } else if (e.code === 'ArrowRight') {
        newIndex = rightClick(currentIndex);
    }

    refs.modalContent.src = imagesArray[newIndex];
}


function rightClick(currentIndex) {
    let newIndex = currentIndex + 1;
    if (newIndex === imagesArray.length) {
        newIndex = 0;
    } 
    return newIndex;
}

function leftClick(currentIndex) {
    let newIndex = currentIndex - 1;
    if (newIndex === -1) {
        newIndex = imagesArray.length-1;
    } 
    return newIndex;
}