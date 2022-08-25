'use strict'

const switcher = Document.querySelector('.btn');

switcher.addEventListener('click', function() {
    Document.body.classList.toogle('dark-theme')

    var className = Document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});