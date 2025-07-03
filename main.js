import { show, hide } from "./dropdown.js";


//eventlistener click on menu item calls a function that drops down 
const menuDropdown = document.getElementById('contact-section-menu');
menuDropdown.addEventListener('click', toggleDropdown);

menuDropdown.dropped = false; // To know if its down or not we add a datamember

//function that makes about us and contact us visible

function toggleDropdown() {
    const dropDownItem = this;

    //if dropped then hide else show the items
    if (dropDownItem.dropped) {
        hide(dropDownItem.querySelector('.dropdown-items'));
        dropDownItem.dropped = false;
    }
    else {
        show(dropDownItem.querySelector('.dropdown-items'));
        dropDownItem.dropped = true;
    }
}


