/**
 * Merge two list in one
 * without dublicates
 */

const refs = {
    lis : document.querySelectorAll('li'),
}

const lisFiltered = [...refs.lis].filter((value, index, array) => {
    console.log(value);
    return array.findIndex(findIndexValue => findIndexValue.firstElementChild.getAttribute('src') ===
        value.firstElementChild.getAttribute('src')) === index
})
    
// const lisFiltered = [...refs.lis].filter((element, index, array) => array.indexOf(element) === index);

const merged = document.createElement('ol');

lisFiltered.forEach(li => merged.append(li.firstElementChild));

document.body.innerHTML = '';
document.body.append(merged);

