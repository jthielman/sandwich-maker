import bread from './bread.js';
import cheese from './cheese.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';

const shapeEndSandwich = (stuff) => {
    let domString2 = '<ul class="list-group list-group-flush">';
    for (let i = 0; i < stuff.length; i++) {
        domString2 += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>${stuff[i].name}</h5>
            </div>
            <div>
                <h5>$${(stuff[i].price / 100).toFixed(2)}</h5>
            </div>
        </li>
        `
    };
    let cost = 0;
    for (let j = 0; j < stuff.length; j++) {
        cost += stuff[j].price;
    }
    domString2 += `
        <li id="total-cost" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h4>Total:</h4>
            </div>
            <div>
                <h4>$${(cost / 100).toFixed(2)}</h4>
            </div>
        </li>
        `
    domString2 += '</ul>'
    utilities.printToDom('order', domString2);
};

const makeOrderEvent = () => {
    const chosenBread = bread.getChosenBread();
    const chosenMeat = meat.getChosenMeats();
    const chosenCheese = cheese.getChosenCheeses();
    const chosenSandwich = chosenBread.concat(chosenMeat, chosenCheese);
    shapeEndSandwich(chosenSandwich);
};

const printEnterButton = () => {
    const domString = '<button id="enter-button" class="btn btn-success">Enter</button>';
    utilities.printToDom('enter-button-holder', domString);
    document.getElementById('enter-button').addEventListener('click', makeOrderEvent);
};

export default { printEnterButton };
