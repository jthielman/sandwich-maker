import utilities from '../helpers/utilities.js';

const condiments = [
    {id: "condiment1", name: "Mayonnaise", price: 20},
    {id: "condiment2", name: "Dijon Mustard", price: 30},
    {id: "condiment3", name: "Spicy Brown Mustard", price: 30},
    {id: "condiment4", name: "Catsup", price: 20},
    {id: "condiment5", name: "Olive Tapenade", price: 40}
];

const printCondimentOptions = () => {
    let domString = '<h3>Condiments:</h3>';
    for (let i = 0; i < condiments.length; i++) {
        domString += `
        <div>
            <input type="checkbox" id="${condiments[i].id}" class="condiment" name="condiment" value="${condiments[i].id}">
            <label for="${condiments[i].id}">${condiments[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('condiments', domString);
};

const getChosenCondiments = () => {
    const chosenCondiments = [];
    // get all condiment checkboxes
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    // keep checked ones in a new array
    for(let j = 0; j < condimentCheckboxes.length; j++) {
        for (let k = 0; k < condiments.length; k++) {
            if (condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id) {
                chosenCondiments.push(condiments[k]);
            };
        };
    };
    
    // return the new array
    return chosenCondiments;
};

export default { printCondimentOptions, getChosenCondiments };
