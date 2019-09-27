import bread from './components/bread.js'
import meat from './components/meat.js';
import order from './components/order.js'

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    order.printEnterButton();
};

init();
