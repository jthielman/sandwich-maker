import utilities from '../helpers/utilities.js';

const meats = [
    {id: "meat1", name: "Roast Beef", price: 160},
    {id: "meat2", name: "Ham", price: 150},
    {id: "meat3", name: "Turkey", price: 140},
    {id: "meat4", name: "Pastrami", price: 160},
    {id: "meat5", name: "Herb Chicken", price: 140}
];

const printMeatOptions = () => {
    let domString = '<h3>Meat:</h3>';
    for (let i = 0; i < meats.length; i++) {
        domString += `
        <div>
            <input type="checkbox" id="${meats[i].id}" class="meat" name="meat" value="${meats[i].id}">
            <label for="${meats[i].id}">${meats[i].name}</label>
        </div>
        `;
    }
    utilities.printToDom('meats', domString);
};

const getChosenMeats = () => {
    const chosenMeats = [];
    // get all meat checkboxes
    const meatCheckboxes = document.getElementsByClassName('meat');
    // keep checked ones in a new array
    for(let j = 0; j < meatCheckboxes.length; j++) {
        for (let k = 0; k < meats.length; k++) {
            if (meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id) {
                chosenMeats.push(meats[k]);
            }
        }
    }
    
    // return the new array
    return chosenMeats;
};

export default { printMeatOptions, getChosenMeats };
