import bread from './components/bread.js'
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import meat from './components/meat.js';
import order from './components/order.js'

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    order.printEnterButton();
};

init();
