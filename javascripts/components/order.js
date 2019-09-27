import bread from './bread.js';
import utilities from '../helpers/utilities.js';

const shapeEndSandwich = (stuff) => {
    let domString2 = '';
    for (let i = 0; i < stuff.length; i++) {
        domString2 += `<h5>${stuff[i].name}</h5>`
    };
    utilities.printToDom('order', domString2);
};

const makeOrderEvent = () => {
    const chosenBread = bread.getChosenBread();
    shapeEndSandwich(chosenBread);
};

const printEnterButton = () => {
    const domString = '<button id="enter-button" class="btn btn-success">Enter</button>';
    utilities.printToDom('enter-button-holder', domString);
    document.getElementById('enter-button').addEventListener('click', makeOrderEvent);
};

export default { printEnterButton };
