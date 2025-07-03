 //Make items visible
function show(itemContainer) {
    itemContainer.classList.add('visible');
    itemContainer.classList.remove('invisible');
}
//Make items invisible
function hide(itemContainer) {
    itemContainer.classList.remove('visible');
    itemContainer.classList.add('invisible');
}

export { show, hide }; //branch check