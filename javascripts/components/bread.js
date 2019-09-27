import utilities from '../helpers/utilities.js';

const breads = [
    {id: "bread1", name: "White", price: 90},
    {id: "bread1", name: "Wheat", price: 90},
    {id: "bread1", name: "Sourdough", price: 90},
    {id: "bread1", name: "Rye", price: 90}
];

const printBreadOptions = () => {
    let domString = '<h3>Bread:</h3>';
    for (let i = 0; i < breads.length; i++) {
        domString += `
        <div>
            <input type="radio" id="${breads[i].id}" name="bread" value="${breads[i].id}">
            <label for="${breads[i].id}">${breads[i].name}</label>
        </div>
        `;
    }
    utilities.printToDom('bread', domString);
};

export default { printBreadOptions };
