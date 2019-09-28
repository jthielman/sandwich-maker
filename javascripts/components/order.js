import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';
import veggies from './veggies.js';

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
        `;
    };
    let cost = 0;
    for (let j = 0; j < stuff.length; j++) {
        cost += stuff[j].price;
    };
    domString2 += `
        <li id="total-cost" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h4>Total:</h4>
            </div>
            <div>
                <h4>$${(cost / 100).toFixed(2)}</h4>
            </div>
        </li>
        `;
    domString2 += '</ul>';
    utilities.printToDom('order', domString2);
};

const makeEnterEvent = () => {
    const chosenBread = bread.getChosenBread();
    const chosenMeat = meat.getChosenMeats();
    const chosenCheese = cheese.getChosenCheeses();
    const chosenCondiment = condiments.getChosenCondiments();
    const chosenVeggie = veggies.getChosenVeggies();
    const chosenSandwich = chosenBread.concat(chosenMeat, chosenCheese, chosenCondiment, chosenVeggie);
    shapeEndSandwich(chosenSandwich);
};

const printEnterButton = () => {
    const domString = '<button id="enter-button" class="btn btn-success">Enter</button>';
    utilities.printToDom('enter-button-holder', domString);
    document.getElementById('enter-button').addEventListener('click', makeEnterEvent);
};

const makeOrderEvent = () => {
    const inputs = document.getElementsByTagName('input')
    let fixins = [];
    for (let j = 0; j < inputs.length; j++){
        if (inputs[j].checked) {
            fixins.push(inputs[j]);
        };
    };
    if (fixins.length > 0) {
        console.log(fixins);
        alert('Thank you for your order.  Alas, you still get no sandwich.');
    } else {
        alert("You haven't chosen any ingredients.");
    };
}

const printOrderButton = () => {
    const orderButtonString = '<button id="order-it-already" class="btn btn-warning">ORDER SANDWICH!!</button>';
    utilities.printToDom('order-button', orderButtonString);
    document.getElementById('order-it-already').addEventListener('click', makeOrderEvent);
};

export default { printEnterButton, printOrderButton };
