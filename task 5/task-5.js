/**
 * Set class 'red-score' to score under 10
 * Set class 'green-score' to other score
 */

const refs = {
    trs: document.querySelectorAll('tr'),
}

refs.trs.forEach(item=>{
    const tds = item.querySelectorAll('td');
    if (tds.length === 0) {
            return;
        }
    if (parseInt(tds[1].textContent) < 10) {
        item.classList.add('red-score');
    } else {
        item.classList.add('green-score')
    }
})


