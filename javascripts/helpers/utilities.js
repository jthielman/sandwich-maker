const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

export default { printToDom };
