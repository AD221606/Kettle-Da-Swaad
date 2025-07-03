function show(itemContainer) {
    itemContainer.classList.add('visible');
    itemContainer.classList.remove('invisible');
}

function hide(itemContainer) {
    itemContainer.classList.remove('visible');
    itemContainer.classList.add('invisible');
}

export { show, hide }; 