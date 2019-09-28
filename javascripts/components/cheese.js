import utilities from '../helpers/utilities.js';

const cheeses = [
    {id: "cheese1", name: "Cheddar", price: 60},
    {id: "cheese2", name: "Provolone", price: 50},
    {id: "cheese3", name: "Swiss", price: 40},
    {id: "cheese4", name: "Chèvre", price: 60},
    {id: "cheese5", name: "Smoked Gouda", price: 40}
];

const printCheeseOptions = () => {
    let domString = '<h3>Cheese:</h3>';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `
        <div>
            <input type="checkbox" id="${cheeses[i].id}" class="cheese" name="cheese" value="${cheeses[i].id}">
            <label for="${cheeses[i].id}">${cheeses[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('cheeses', domString);
};

const getChosenCheeses = () => {
    const chosenCheeses = [];
    // get all cheese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    // keep checked ones in a new array
    for(let j = 0; j < cheeseCheckboxes.length; j++) {
        for (let k = 0; k < cheeses.length; k++) {
            if (cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id) {
                chosenCheeses.push(cheeses[k]);
            };
        };
    };
    
    // return the new array
    return chosenCheeses;
};

export default { printCheeseOptions, getChosenCheeses };
