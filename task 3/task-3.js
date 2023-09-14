/**
 * Create list of 3 random images
 * List should be enumerated
 */

const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
];
const olTag = document.createElement('ol');

images.forEach(el => {
    const liTag = document.createElement('li')
    const imageTag = document.createElement('img');

    imageTag.setAttribute('src', el);
    liTag.append(imageTag);
    olTag.append(liTag);
})
document.body.prepend(olTag);

