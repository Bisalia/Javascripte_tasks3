const { JSDOM } = require('jsdom');

function globalToggle(className) {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    const elements = dom.window.document.querySelectorAll('.' + className);
    
    if (elements.length === 0) {
        console.log('No elements found with class: ' + className);
        return;
    }

    const isActive = className.endsWith('_active');

    elements.forEach(element => {
        if (isActive) {
            element.classList.remove(className);
            element.classList.add(className.replace('_active', ''));
        } else {
            element.classList.remove(className);
            element.classList.add(className + '_active');
        }
    });
}

// Exemple d'utilisation :
globalToggle('tag');