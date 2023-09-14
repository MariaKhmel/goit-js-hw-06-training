/**
 * We have list of numbers
 * 1. Remove all even numbers
 * 2. Replase text to image https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50
 */

const refs = {
    liElements: document.querySelectorAll('li'),
    
}

refs.liElements.forEach((el) => {
    
    if (parseInt(el.textContent) % 2 === 0) {
        el.remove();
    }
})


refs.liElements.forEach(el => {
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50')
el.innerHTML = ''
el.append(image)
})

