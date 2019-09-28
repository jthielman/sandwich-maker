import utilities from '../helpers/utilities.js';

const breads = [
    {id: "bread1", name: "White", price: 140},
    {id: "bread2", name: "Wheat", price: 140},
    {id: "bread3", name: "Sourdough", price: 150},
    {id: "bread4", name: "Rye", price: 160}
];

const printBreadOptions = () => {
    let domString = '<h3>Bread:</h3>';
    for (let i = 0; i < breads.length; i++) {
        domString += `
        <div>
            <input type="radio" id="${breads[i].id}" class="bread" name="bread" value="${breads[i].id}">
            <label for="${breads[i].id}">${breads[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('bread', domString);
};

const getChosenBread = () => {
    const chosenBread = [];
    // get all bread radio buttons
    const breadRadios = document.getElementsByClassName('bread');
    // keep checked one(s) in a new array
    for (let j = 0; j < breadRadios.length; j++) {
        if (breadRadios[j].checked) {
            chosenBread.push(breads[j]);
        };
    };
    // return the new array
    return chosenBread;
};

export default { printBreadOptions, getChosenBread };
