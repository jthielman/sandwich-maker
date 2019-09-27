import utilities from '../helpers/utilities.js';

const veggies = [
    {id: "veggie1", name: "Lettuce", price: 10},
    {id: "veggie2", name: "Tomato", price: 20},
    {id: "veggie3", name: "Red Onion", price: 20},
    {id: "veggie4", name: "Banana Peppers", price: 30},
    {id: "veggie5", name: "Radish", price: 30}
];

const printVeggieOptions = () => {
    let domString = '<h3>Veggies:</h3>';
    for (let i = 0; i < veggies.length; i++) {
        domString += `
        <div>
            <input type="checkbox" id="${veggies[i].id}" class="veggie" name="veggie" value="${veggies[i].id}">
            <label for="${veggies[i].id}">${veggies[i].name}</label>
        </div>
        `;
    }
    utilities.printToDom('veggies', domString);
};

const getChosenVeggies = () => {
    const chosenVeggies = [];
    // get all veggie checkboxes
    const veggieCheckboxes = document.getElementsByClassName('veggie');
    // keep checked ones in a new array
    for(let j = 0; j < veggieCheckboxes.length; j++) {
        for (let k = 0; k < veggies.length; k++) {
            if (veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id) {
                chosenVeggies.push(veggies[k]);
            }
        }
    }
    
    // return the new array
    return chosenVeggies;
};

export default { printVeggieOptions, getChosenVeggies };
